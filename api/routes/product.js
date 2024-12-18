const express = require('express');
const path = require('path');
const Product = require("../models/Product");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();
const upload = require('../config/multerConfig'); // Import the multer config


router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

//CREATE - Função para cadastrar produtos

router.post('/', verifyTokenAndAdmin, upload.single('img'), async (req, res) => {
    // Ensure the img field is set correctly in the request body
    const newProduct = new Product({
      ...req.body,
      img: `/uploads/${req.file.filename}`, // Assign the file path to the img field
    });
    
    
    try {
      console.log(req.file);
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
  });

//UPDATE - Função para atualizar produtos

router.post("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE - Função para deletar produtos

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...")
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT - Função para lista produto específico

router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS - Função para listar todos os produtos

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: - 1 }).limit(5);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }
            
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
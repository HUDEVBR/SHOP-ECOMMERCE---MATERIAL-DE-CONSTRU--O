import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref
} from "firebase/storage";
import app from "../../firebase"


export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => { 
    setInputs((prev) => {
      return {...prev, [e.target.name]:e.target.value}
    })
  }
  const handleCat = (e) => { 
    setCat(e.target.value.split(","));
  }
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName)
  }
  console.log(file)

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Novo Produto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e => setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Apple Airpods" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="Description ..." onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="R$ 100"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input name="cat" type="text" placeholder="Fitas, Disjuntores, Chuveiros" onChange={handleCat}/>
        </div>
        <div className="addProductItem">
          <label>Em estoque</label>
          <select name="inStock" id="" onChange={handleChange}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  );
}

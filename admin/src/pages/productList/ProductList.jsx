import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCalls";


export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProducts(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={`http://localhost:5000${params.row.img}`} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {field: "inStock", headerName: "Stock", width:  80},
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={6}
        checkboxSelection
      />
    </div>
  );
}

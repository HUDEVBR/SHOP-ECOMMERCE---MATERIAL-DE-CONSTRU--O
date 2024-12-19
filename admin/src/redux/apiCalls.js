import { publicRequest, userRequest } from "../requestMethods.js";
import { loginFailure, loginStart, loginSuccess } from "./userRedux.js"
import { getProductStart, getProductSuccess, getProductFailure } from "./productRedux.js";
import { deleteProductStart, deleteProductSuccess, deleteProductFailure } from "./productRedux.js";
import { userData } from "../dummyData.js";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
};

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
};

export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(res.data))
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};
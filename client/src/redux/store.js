import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartRedux.js';
import  useReducer  from './userRedux.js';

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: useReducer
    },
});
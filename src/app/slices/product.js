import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../data/ProductData";
import Swal from "sweetalert2";
import { getAllProducts } from "../Actions/Index"


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: ProductData,
        carts: [],
        favorites: [],
        single: null,  // her bir ürün temsil edelr

    },
    reducers: {
        AddToCart: (state, action) => {
            
        },

        getProductById: (state, action) => {
           
        },

        updateCart: (state, action) => {
            
        },

        removeCart: (state, action) => {
           
        },

        //sepeti comple silmek için
        clearCart: (state) => {
            state.carts = []
        },

        addToFavorites: (state, action) => {
            
        },
        
        removeToFav: (state, action) => {
            
        },
        //favorileri temizle
        clearFav: (state) => {
            state.favorites = [] // state içindeki favori arrayını temizlemiş oluyor 
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
                console.log("*NULL STATE*");
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.result;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.log("*", state.error);
            });
    },
})

const productsReducer = productsSlice.reducer
export default productsReducer


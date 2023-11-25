import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await axios.get('https://localhost:5050/api/products')
    .catch(error => {
      console.error("API Error:", error);
      throw error; // Throw the error again to trigger the rejection of the promise
    });
  return response.data;
});

// Action to get products by category
export const getProductsByCategory = createAsyncThunk('products/getProductsByCategory', async (categoryName) => {
  //console.log("Inside get products by category: ", categoryName);
  try {
    const response = await axios.get(`https://localhost:5050/api/products/byCategory/${categoryName}`);
    //console.log("API Response:", response.data);
    return  { categoryName, "_products": response.data };
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
});

export const getProductByID = createAsyncThunk('products/getProductByID', async (productId) => {
  //console.log("Inside get products by id: ", productId);
  try {
    const response = await axios.get(`https://localhost:5050/api/products/${productId}`);
    //console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
});

/*import axios from "axios";
//axios.defaults.proxy.host = "http://www.demoapp.com"

export const GetAllProducts = () =>(dispatch) => {
    console.log("Get All Products");
    dispatch({type : "GET_ALL_PRODUCTS_START"}); 
    axios
    .get("/api/products")
    .then((response)=> {  
      console.log("data :" + response.data);
       dispatch({type : "GET_ALL_PRODUCTS_SUCCESS", payload : response.data})   
    })
    .catch((error)=> {
      dispatch({type : "GET_ALL_PRODUCTS_FAILURE", payloERRORad : error})
    });
}*/
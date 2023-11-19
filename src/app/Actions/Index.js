import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  console.log("*******************")
  const response = await axios.get('https://localhost:5050/api/products')
    .catch(error => {
      console.error("API Error:", error);
      throw error; // Throw the error again to trigger the rejection of the promise
    });

  console.log("API Response:", response.data);
  return response.data;
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
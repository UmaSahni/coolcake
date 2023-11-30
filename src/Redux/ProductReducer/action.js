import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_LOADING, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS } from "./actionTypes";
import { BASE_URL } from "../../apiEndPoints";
import toast, { Toaster } from 'react-hot-toast';

// ADD PRODUCT :: POST RESQUEST

export const addProduct = (data) => (dispatch) =>{
  
  dispatch({type:PRODUCT_LOADING})
  // Display loading notification
  const loadingnoti = toast.loading("...loading")


  axios.post(`${BASE_URL}/products`, data).then((res)=>{
    dispatch({type:ADD_PRODUCT_SUCCESS})
    
    // Close the loading notification
    toast.dismiss(loadingnoti)

    // Display success notification
    toast.success(<b>Added successful!</b>)
  })
  .catch((err)=>{
    dispatch({type:PRODUCT_FAILURE})
    
    toast.dismiss(loadingnoti)
    // Display error notification
    toast.error(<b>Unable to add product. Please try later.</b>);
  })
}

// GET Product : GET REQUEST 
export const getProduct = (data) => (dispatch) =>{
dispatch({type: PRODUCT_LOADING})

axios.get(`${BASE_URL}/products` , data)
.then((res)=>{
  dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
})
.catch((err)=>{
  console.log("ERROR IN getProduct", err)
dispatch({type:PRODUCT_FAILURE})

})}
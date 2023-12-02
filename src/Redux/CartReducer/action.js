import axios from "axios";
import {ADD_CART_SUCCESS, CART_FAILURE, CART_LOADING, GET_CART_SUCCESS} from "../CartReducer/actionTypes"
import { BASE_URL } from "../../apiEndPoints";
import toast, { Toaster } from 'react-hot-toast';

// ADD CART :: POST RESQUEST

export const addCart = (data) => (dispatch) =>{

  
  dispatch({type:CART_LOADING})
  // Display loading notification
  const loadingnoti = toast.loading("...adding")

  axios.post(`${BASE_URL}/cart`, data).then((res)=>{
    dispatch({type:ADD_CART_SUCCESS, payload:data})
    
    // Close the loading notification
    toast.dismiss(loadingnoti)

    // Display success notification
    toast.success(<b>Cart Added</b>)
  })
  .catch((err)=>{
    dispatch({type:CART_FAILURE})
    
    toast.dismiss(loadingnoti)
    // Display error notification
    toast.error(<b>Unable to add product. Please try later.</b>);
  })
}

// GET Cart : GET REQUEST 
export const getCart = (data) => (dispatch) =>{
dispatch({type: CART_LOADING})

axios.get(`${BASE_URL}/cart` , data)
.then((res)=>{
  // Accessing the x-total-count header from the response
      const totalCount = res.headers['x-total-count'];

  dispatch({type:GET_CART_SUCCESS, payload:res.data, totalCount })
})
.catch((err)=>{
  console.log("ERROR IN getCart", err)
dispatch({type:CART_FAILURE})

})}



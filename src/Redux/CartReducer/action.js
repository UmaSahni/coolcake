import axios from "axios";
import {
  ADD_CART_SUCCESS,
  CART_FAILURE,
  CART_LOADING,
  GET_CART_SUCCESS,
  PATCH_SUCCESS,
  REMOVE_SUCCESS,
} from "../CartReducer/actionTypes";
import { BASE_URL } from "../../apiEndPoints";
import toast from "react-hot-toast";

// ADD CART :: POST RESQUEST

export const addCart = (data) => (dispatch) => {
  dispatch({ type: CART_LOADING });
  // Display loading notification
  const loadingnoti = toast.loading(<b>adding...</b>);

  axios
    .post(`${BASE_URL}/cart`, data)
    .then((res) => {
      dispatch({ type: ADD_CART_SUCCESS, payload: data });

      // Close the loading notification
      toast.dismiss(loadingnoti);

      // Display success notification
      toast.success(<b>Cart Added</b>);
    })
    .catch((err) => {
      dispatch({ type: CART_FAILURE });

      toast.dismiss(loadingnoti);
      // Display error notification
      toast.error(<b>Unable to add product. Please try later.</b>);
    });
};

// GET Cart : GET REQUEST
export const getCart = (id) => (dispatch) => {
  dispatch({ type: CART_LOADING });

  axios
    .get(`${BASE_URL}/cart?userId=${id}`)
    .then((res) => {
      // console.log(res.data)

      dispatch({ type: GET_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("ERROR IN getCart", err);
      dispatch({ type: CART_FAILURE });
    });
};

// Delete from Cart

export const deleteCartItem = (id) => (dispatch) =>{
  // Display loading notification
  const loadingnoti = toast.loading( <b> Removing </b>);

dispatch({type:CART_LOADING});
 return axios.delete(`${BASE_URL}/cart/${id}`)
  .then((res)=>{
    toast.dismiss(loadingnoti)
    console.log(res, "comming from action")
    dispatch({type:REMOVE_SUCCESS})
    
   
  })
  .catch((err)=>{
    console.log("Error in deleteCartItem", err)
    dispatch({type:CART_FAILURE,})
     toast.dismiss(loadingnoti)
     toast.error("Error ouccred, Sorry!")
  })
}


// Patch Request for Quantity

export const updateQuantity = (data) => (dispatch) =>{
 const {id} = data
  dispatch({type:CART_LOADING})
 return axios.patch(`${BASE_URL}/cart/${id}`,{quantity:data.quantity}).then((re)=>{
    dispatch({type:PATCH_SUCCESS})
  }).catch((err)=>{
    dispatch({type:CART_FAILURE})
    console.log("ERROR in updateQuantity in cart", err)
  })
}
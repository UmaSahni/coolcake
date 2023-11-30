import { PRODUCT_FAILURE, PRODUCT_LOADING,GET_ALL_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, GET_PRODUCT_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products:[],
  AllproductCount:0,
  
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // POST Product
    case PRODUCT_LOADING : {
      return {... state, isLoading:true}
    }
    case ADD_PRODUCT_SUCCESS :{
      return {...state, isLoading:false}
    }
    case PRODUCT_FAILURE : {
      return {...state,isLoading:false, isError:true }
    }
    // GET Product
    case GET_PRODUCT_SUCCESS : {
      return {...state, isLoading:false, products:payload}
    }
    case GET_ALL_PRODUCT_SUCCESS :{
       return {...state, isLoading:false, AllproductCount:payload.length}
    }
    default:
      return state;
  }
};

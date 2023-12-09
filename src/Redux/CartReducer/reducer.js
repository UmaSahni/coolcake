import { ADD_CART_SUCCESS, CART_FAILURE, CART_LOADING, GET_CART_SUCCESS, PATCH_SUCCESS, REMOVE_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cart:[],
  cartItem:0
  
  
};
export const reducer = (state = initialState, { type, payload  }) => {
   console.log('Current state:', state, payload); // Log the current state
  switch (type) {
    // Comman
    case CART_LOADING:
      return {...state, isLoading:true}
    
    case CART_FAILURE:
      return {...state, isLoading:false, isError:true}

    // POST Product
    case ADD_CART_SUCCESS:
      return {...state, isLoading:false, cart:payload}
    
    // Get all the Cart Items
    case GET_CART_SUCCESS :
      return {...state, isLoading:false, cart:payload, cartItem:payload.length}

    // Delete Cart Item
    case REMOVE_SUCCESS :
      return {...state, isLoading:false}

    // Update quantity in cart
    case PATCH_SUCCESS :
      return {...state, isLoading:false}

    default:
      return state;
  }
};

import { ADD_CART_SUCCESS, CART_FAILURE, CART_LOADING } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cart:[],
  cartItem:0
  
  
};
export const reducer = (state = initialState, { type, payload  }) => {
   console.log('Current state:', state); // Log the current state
  switch (type) {
    // Comman
    case CART_LOADING:
      return {...state, isLoading:true}
    
    case CART_FAILURE:
      return {...state, isLoading:false, isError:true}

    // POST Product
    case ADD_CART_SUCCESS:
      return {...state, isLoading:false, cart:payload}
    

    
    default:
      return state;
  }
};

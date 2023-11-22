import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  auth: false,
  data: {},
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        auth: true,
        data: payload,
      };

    case LOGIN_FAILURE :
        return {
            ...state,
            isLoading:false,
            isError:true,
            data:payload
        }
    default:
      return state;
  }
};

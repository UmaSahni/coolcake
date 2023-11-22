import axios from "axios";
import { SIGNUP_API } from "../../apiEndPoints";
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  axios.get(SIGNUP_API)
  .then((res) => {
    const users = res.data
    console.log(users)
// Check if the entered user credentials match any user in the response
   const UserFoundOrNot = users.find((u)=> (userData.email == u.email && userData.password == u.password))

   if(UserFoundOrNot){
    dispatch({type:LOGIN_SUCCESS, payload:UserFoundOrNot})
   }
   else{
    // Dispatch failure action if user is not found
    dispatch({type:LOGIN_FAILURE, payload:"Invalid credential"})
   }
  })
  .catch((err)=>{
    dispatch({type:LOGIN_FAILURE, payload:err})
  })
};

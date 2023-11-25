import axios from "axios";
import { SIGNUP_API } from "../../apiEndPoints";
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";
import toast, { Toaster } from 'react-hot-toast';

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
 let loadingShow = toast.loading("...please wait!")

return  axios.get(SIGNUP_API)
  .then((res) => {
    const users = res.data
    console.log(users)
// Check if the entered user credentials match any user in the response
   const UserFoundOrNot = users.find((u)=> (userData.email == u.email && userData.password == u.password))

   if(UserFoundOrNot){
    // Dismiss loading
      toast.dismiss(loadingShow)
      toast.success(<b>Logged in successfull !!</b>)

    dispatch({type:LOGIN_SUCCESS, payload:UserFoundOrNot})
   }
   else{
    // Dispatch failure action if user is not found
    toast.dismiss(loadingShow)
    toast.error("Invalid credential")
    dispatch({type:LOGIN_FAILURE, payload:"Invalid credential"})
   }
  })
  .catch((err)=>{
    dispatch({type:LOGIN_FAILURE, payload:err})
     toast.dismiss(loadingShow)
      toast.error(<b>Sorry ! unable to login</b>)
  })
};

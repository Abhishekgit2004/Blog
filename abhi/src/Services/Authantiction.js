import axios from "axios";
import { axiosInstance } from "../Pages/AxiosFetch/Axios";



const CreateLoginUser=(Username,password)=>{
  return  axiosInstance.post("/api/auth/login",{Username,password})
}
const CreatetRegisterUser=(name,email,password)=>{
   return axiosInstance.post("/api/auth/register",{name,email,password})
}
const createBlog=()=>{
   return axios.get("https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyAfP3IMtEqG6QB94uXOzVXgtzSc4wxFL4s")
}


export const Authantiction={
        CreateLoginUser,
        CreatetRegisterUser,
        createBlog
}
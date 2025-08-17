import { axiosInstance } from "../Pages/AxiosFetch/Axios";



const CreateLoginUser=(Username,password)=>{
    axiosInstance.post("/api/auth/login",{Username,password})
}
const getRegisterUser=(Username,email,password)=>{
    axiosInstance.post("/api/auth/register",{Username,email,password})
}


export const Authantiction={
        CreateLoginUser,
        getRegisterUser
}
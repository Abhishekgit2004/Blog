import { axiosInstance } from "../Pages/AxiosFetch/Axios";



const CreateLoginUser=(Username,password)=>{
    axiosInstance.post("/api/auth/login",{Username,password})
}
const getRegisterUser=(name,email,password)=>{
    axiosInstance.post("/api/auth/register",{name,email,password})
}


export const Authantiction={
        CreateLoginUser,
        getRegisterUser
}
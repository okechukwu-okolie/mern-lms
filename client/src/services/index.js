//THIS IS THE API SERVICE FILE WHERE WE WILL WRITE ALL THE API CALLS RELATED
//  TO AUTHENTICATION

import axiosInstance from "@/api/axiosInstance";
// import axios from "axios";

export async function registerService(formData){
    const {data} = await axiosInstance.post('/auth/register',{...formData,role:'user'})
return data;
}  



export async function loginService(formData){
    const {data} = await axiosInstance.post('/auth/login',formData)
return data;
}  


export async function checkAuthService(){
    const {data} = await axiosInstance.get('/auth/check-auth')
    return data;
}  
  

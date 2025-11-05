import axiosInstance from "@/api/axiosInstance";
// import axios from "axios";

export async function registerService(formData){
    const {data} = await axiosInstance.post('/auth/register',{...formData,role:'user'})
return data;
}  

    
    // const api_url = 'http://localhost:5500/auth/register'; 
    // const userPayload = {
    //     ...formData,
    //     role: 'user'
    // }; 
    // try{
    //     const response = await axios.post(api_url, userPayload);
    //     console.log('User created successfully: ', response.data)
    //     return response.data;
    // } catch (error) {
    //     console.error('Error creating user: ', error);
    //     throw error;
    // }




export async function loginService(formData){
    const {data} = await axiosInstance.post('/auth/login',formData)
return data;
}  


export async function checkAuthService(){
    const {data} = await axiosInstance.get('/auth/check-auth')
    return data;
}  
  

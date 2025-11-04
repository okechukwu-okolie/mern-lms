// import axiosInstance from "@/api/axiosInstance";
import axios from "axios";

export async function registerService(formData){
    // const {data} = await axiosInstance.post('/auth/register',{
    //     ...formData,
    //     role:'user'
    const api_url = 'http://localhost:5500/auth/register'; 
    const userPayload = {
        ...formData,
        role: 'user'
    }; 
    try{
        const response = await axios.post(api_url, userPayload);
        console.log('User created successfully: ', response.data)
        return response.data;
    } catch (error) {
        console.error('Error creating user: ', error);
        throw error;
    }
    }
// )
// return data;}  
  

// const {default:axiosInstance} = require('@/api/axiosInstance')
import axiosInstance from "@/api/axiosInstance";

async function registerService(formData){
    const {data} = await axiosInstance.post('/auth/register',{
        ...formData,
        role:'user'
    })
    return data;
}
import axios from "axios"

// axios.
const axiosInstance = axios.create({
    baseURL:  'http://localhost:5500'
})

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
    // 


//axios interceptors
axiosInstance.interceptors.request.use((config => {
    const accessToken = sessionStorage.getItem('accessToken')
    
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
}), (error) => {
    return Promise.reject(error)
})

export default axiosInstance   
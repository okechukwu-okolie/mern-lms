import axios from "axios"

// axios.
const axiosInstance = axios.create({baseURL:  'http://localhost:5500'});

axiosInstance.interceptors.request.use(config => {
    const accessToken = JSON.parse(sessionStorage.getItem('accessToken')) || "";
    //sessionStorage.getItem('accessToken')
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
}, (error) => {
    return Promise.reject(error)
})

export default axiosInstance   




/*
const axiosInstance = axios.create({
baseURl: 'http://localhost:5500'});

axiosInstance.interceptors.request.use((config =>{
    const accessToken = JSON.parse(sessionStorage.getItem('accessToken)) || "";

    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
    }),(error)=>{
    return Promise.reject(error)})}

    export default axiosInstance






    const axiosInstance = axios.create({
    baseURL: 'localhost:5500'
    });

    axiosInstance.interceptors.request.use(config=>{
        const accessToken = JSON.parse(sessionStorage.getItem('accessToken')) || "";
        if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`}
        },(error)=>{
            return Promise.reject(error)
        })

        export 
*/
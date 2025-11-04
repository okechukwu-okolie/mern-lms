require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('./routes/auth-routes/index.js')




const app = express()
const PORT = process.env.PORT || 5500
const MONGO_URL = process.env.MONGO_URL

// {
//         origin:process.env.CLIENT,
//         methods:['PUT','POST','GET','DELETE'],
//         allowedHeaders:[
//             'Content-Type',
//             'Authorization'
//         ],
//         accessControlAllowCredentials:true,
//         credentials: true, // If you need to send cookies/auth headers
//         optionsSuccessStatus: 204
//     }

app.use(cors())
app.use(express.json())

mongoose.connect(MONGO_URL)
.then(()=>console.log('database connected successfully'))
.catch((error)=>console.log(error))


//route configuratio 
app.use('/auth', authRoutes)


app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        success:false,
        message:'Something went wrong'
    })
})


app.listen(PORT, ()=> console.log('the server is running at port: ',PORT))
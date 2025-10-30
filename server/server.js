require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')




const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL



app.use(
    cors({
        origin:process.env.CLIENT,
        methods:['PUT','POST','GET','DELETE'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
        ]
    })
)
app.use(express.json())

mongoose.connect(MONGO_URL)
.then(()=>console.log('database connected successfully'))
.catch((error)=>console.log(error))


//route configuration

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        success:false,
        message:'Something went wrong'
    })
})


app.listen(PORT, ()=> console.log('the server is running at port: ',PORT))
const express = require('express')
const multer = require('multer')
const { UploadMediaToCloudinary, deleteMediaFromCloudinary} = require('../../helpers/cloudinary')


const router =  express.Router();

const upload = multer({dest:'uploads/'})

router.post('/upload', upload.single('file'), async(req,res)=>{
    try {
        const result = await UploadMediaToCloudinary(req.file.path)
        res.status(200).json({
            success:true,
            data:result,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
             message: 'Error uploading media'
            })
    }
})


router.delete('/delete/:id', async(req,res)=>{
    try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({
                success:false,
                message:'Asset ID is required'
            })
        }
        await deleteMediaFromCloudinary(id)

        res.status(200).json({
            success:true,
            message:'Asset deleted successfully from cloudinary'
        })
    } catch (error) {
         res.status(500).json({
            success:false,
             message: 'Error deleting media'
            })
    }
    
})

module.exports =  router
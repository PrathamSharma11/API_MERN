const cloudinary = require('cloudinary').v2;
const UserModel = require('../models/User')
const bcrypt = require('bcrypt');
cloudinary.config({ 
    cloud_name: 'daevddhla', 
    api_key: '697434874533515', 
    api_secret: 'ThyuyCix0JcZ8KBDSBXpk_eaBB0',
    
  });
class UserController{
    static getalluser = async(req,res)=>{
        try{
            res.send('hello user')
        }
        catch (error){
            console.log(error)

        }
    }
    static userinsert = async (req, res) => {
        const { name, email, password, confirmpassword } = req.body;
        const image = req.files.image;
        const imageupload = await cloudinary.uploader.upload(image.tempFilePath, { folder: 'profileimageapi' });

        const user = await UserModel.findOne({email:email})
        if(user){
            res
             .status(401)
             .json({status:"failed",message:"this email is already exist"});
        }
        else{
            if(name && email && password && confirmpassword){
                if(password == confirmpassword){
                    try{
                        const hashpassword = await bcrypt.hash(password,10);
                        const result = new UserModel({
                            name:name,
                            email:email,
                            password:hashpassword,
                            image:{
                                public_id:imageupload.public_id,
                                url:imageupload.secure_url,
                            },
                        })
                        await result.save()
                        res.status(201).json({
                            status:"success",
                            message:"registration success",
                        })
                       

                    }catch (error){
                        console.log(error)
                    }
                }
               
                
                else{
                    res
             .status(401)
             .json({status:"failed",message:"all field is required"});
                }
            }
        }




    }
    

}
module.exports = UserController
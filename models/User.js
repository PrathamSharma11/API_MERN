const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require:true,
        },
        email:{
            type: String,
            require:true,
        },
        
        image:{
            public_id:{
                type:String,
            },
        },
        password:{
            type:String,
            require:true,
        },
        role:{
            type:String,
            default:"User",
        },
    },
    {timestamps:true}
);



//create collection
const UserModal = mongoose.model("users",UserSchema);
module.exports=UserModal;
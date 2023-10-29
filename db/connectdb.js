const mongoose = require('mongoose')






const  connectDB=()=>{
    return mongoose.connect(process.env.LOCAL_URL)


    .then(()=>{
        console.log('connection successfull')

    })
    .catch((err)=>{
        console.log(err)

    })
}
module.exports = connectDB
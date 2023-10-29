const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const web = require('./routes/web')
const connectdb = require('./db/connectdb')
const fileupload = require("express-fileupload");
const cors = require('cors')



app.use(cors())
//temp file uploader
app.use(fileupload({useTempFiles:true}));


//for dataget in api
app.use(express.json())
connectdb()



//load route
app.use('/api',web)
//localhost:4000/api     
//upar wala poora likho then /route on browser tabhi chalega

















//server create
app.listen(process.env.PORT,()=>{
    console.log(`server running on localhost: ${process.env.PORT}`)
})
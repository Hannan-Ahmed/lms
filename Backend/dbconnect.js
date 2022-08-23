var mongoose = require('mongoose');

const mongoURI='mongodb://localhost:27017/LMS';

const connecttomongo=()=>{

    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongoose Successfully");
    })
}


module.exports=connecttomongo;

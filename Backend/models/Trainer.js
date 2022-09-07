const mongoose = require('mongoose');
const { Schema } = mongoose;


const TrainerSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:   String,
        required:true,
        // unique :true
    },
    contactno:{
        type:Number,
        required:true
    },
    cnic:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    password:{
        type:   String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    

    date: { type: Date, default: Date.now },
   
  });
const Trainer=mongoose.model('Trainer',TrainerSchema);  //user is a name given to model 
//   User.createIndexes();
  module.exports=Trainer;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({

    trainer: {   //similar to Foreign Key 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer'
        
    }, 

    course_name: {
        type: String,
        // required: true
    },
    course_id: {
        type: Number,
        // required: true,
        unique: true
    },
    course_description: {
        type: String,
        default: "Genral"
    },

    course_start_date: {
        type: Date,
        default: Date.now
    },

    course_end_date: {
        type: Date,
        default: Date.now
    },
    course_outline: {
        type: String
    },

    course_img: {
        data: Buffer,
        contentType: String,
    },

    // // **********************************************

    // Announcement: [{
    //     type:String,
    //     date: { type: Date, default: Date.now },
    // }],


    // Assignments: [{
    //     data: Buffer,
    //     contentType: String,
    //     assignment_name: String,
    //     date: { type: Date, default: new Date() }, //submiisin aur due date bhi banao
    // }],

    // // quizes: [{
    // //     data: Buffer,
    // //     contentType: String,
    // //     quiz_name: String,
    // //     date: { type: Date, default: Date.now }
    // // }],



    // // result: [{
    // //     data: Buffer,
    // //     result_name: String,
    // //     date: { type: Date, default: Date.now },
    // //     contentType: String,
    // // }],


    // // private_message:[
    // //     {
    // //         type:String,
    // //         date: { type: Date, default: Date.now },
    // //     }
    // // ],

    date: { type: Date, default: Date.now },


});

module.exports = mongoose.model('course', CourseSchema)  //course is a name given to model 
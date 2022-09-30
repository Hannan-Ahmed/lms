const express = require('express')
const router = express.Router()
const Course = require('../models/Course')


const multer = require("multer");

const bodyParser = require("body-parser");
const fs = require("fs");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


var http = require('http');
const fetchuser = require('../Middelwares/fetchuser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/LMS";



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// I don't know what I'm doin but I'm definitely coding
// Back end ain't that hard, honestly. Works finee


const upload = multer({ storage: storage });

router.post("/",fetchuser, upload.single('testImage'), (req, res) => {

  const files = req.files;



  const saveImage = Course({


    course_name: req.body.course_name,
    course_id: req.body.course_id,
    course_description: req.body.course_description,
    course_start_date: req.body.course_start_date,
    course_end_date: req.body.course_end_date,
    course_outline: req.body.course_outline,

    admin: req.admin.id,

    course_img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      // data: req.file.filename,
      contentType: "image/png",
    },

    // Assignments: {
    //   data: fs.readFileSync("uploads2/" + req.file.filename),
    //   // data: req.file.filename,
    //   contentType: "application/pdf",
    //   assignment_name: req.body.assignment_name,
    // },

  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
  res.send('image is saved')
}
);


// ***************************************************************************************************************
router.get('/fetch', fetchuser,async (req, res) => {

  try {


    // const notes = await Course.find({ Course }, { course_name: true, course_id: true, course_description: true, course_start_date: true, course_end_date: true, course_outline: true, date: true,admin: req.admin.id })
    // const notes = await Course.find( {course_name:true ,admin: req.admin.id })

    const notes = await Course.find( { Course,admin: req.admin.id },{ course_name:true} )

    res.json(notes);

  } 
  catch (error) {
    console.error(error.message);
    res.status(500).send(error)
  }
})


// ***************************************************************************************************************


const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// I don't know what I'm doin but I'm definitely coding
// Back end ain't that hard, honestly. Works finee


const upload2 = multer({ storage: storage2 });



router.put('/updatec', upload.single('testImage2'), async (req, res, db) => {

  try {



    // db.courses.update({course_name:'Mern Satck'}, { $addToSet:{ Assignments:{assignment_name:['new assignment uploading']}}})
    //  const note=  Course.updateMany({course_name:'Mern'}, { $addToSet:{ Assignments:{assignment_name:['nweqeqweqwew assignment uploading']}}})



    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("LMS");
      
      // var myquery = { course_name: "mern" };
      // var newvalues = { $addToSet: { Assignments: { assignment_name: ['asadasasasasas'] } } };
      
      
      
      
      dbo.collection("courses").updateMany({ course_name: 'Mern Satck' }, {
        $addToSet: {
          Assignments: {
            // assignment_name: ['Assignment Database'],
            assignment_name: req.body.assignment_name,
            date: new Date(),
            data: fs.readFileSync("uploads/" + req.file.filename),
            // data: req.file.filename,
            contentType: "application/pdf",



          }
        }
        
      }, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      })
    //   saveImage
    // .save()
    // .then((res) => {
    //   console.log("Assignment is saved is saved");
    // })
    // .catch((err) => {
    //   console.log(err, "error has occur");
    // });
      
      
      
      
      
      ;
    });













    res.json('file updated');







  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured")
  }
})



// *****************************************************











// router.post('/',(req,res)=>{
//     course =  Course.create({
//         course_name: req.body.course_name,
//         course_id: req.body.course_id,
//         course_description:req.body.course_description,
//         course_start_date: req.body.course_start_date,
//         course_end_date: req.body.course_end_date,
//         course_outline: req.body.course_outline,

//       })
//       res.json('Cource added successfully')
// }

// )


module.exports = router
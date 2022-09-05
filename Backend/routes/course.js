const express = require('express')
const router = express.Router()
const Course = require('../models/Course')


const multer = require("multer");

const bodyParser = require("body-parser");
const fs = require("fs");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());







const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  router.post("/", upload.array("testImage"), (req, res) => {
    const saveImage =  Course({
      
      
        course_name: req.body.course_name,
        course_id: req.body.course_id,
        course_description:req.body.course_description,
        course_start_date: req.body.course_start_date,
        course_end_date: req.body.course_end_date,
        course_outline: req.body.course_outline,
        
        
        
          course_img: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            // data: req.file.filename,
            contentType: "image/png",
          },

          Assignments: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            // data: req.file.filename,
            contentType: "application/pdf",
            assignment_name: req.body.assignment_name,
          },

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
  });

 
// *****************************************************
router.get('/fetch', async (req, res) => {
   
  try {
   
  
   const notes = await Course.find({Course},{course_name:true,course_id:true,course_description:true,course_start_date:true,course_end_date:true,course_outline:true,date:true})
   res.json(notes);
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
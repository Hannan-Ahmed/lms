const connecttomongo=require('./dbconnect');
var cors = require('cors')

const express = require('express')
const app = express()
const port = 5000

const multer = require("multer");
const ImageModel=require('./image.model')

const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





// app.use(express.urlencoded({ extended: true }));

app.use(cors())


app.use(express.json())








app.use('/api/auth',require('./routes/auth'))

app.use('/course',require('./routes/course'))





// app.get('/otp', function (req, res) {
//   res.render('inbox');
// });



// app.listen(port, '192.168.43.92' , () => {
//   console.log(`project app listening on port ${port}`)
// })



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("testImage"), (req, res) => {
//   const saveImage =  ImageModel({
//     img: {
//       name: req.body.name,
//       data: fs.readFileSync("uploads/" + req.file.filename),
//       contentType: "image/png",
//     },
//   });
//   saveImage
//     .save()
//     .then((res) => {
//       console.log("image is saved");
//     })
//     .catch((err) => {
//       console.log(err, "error has occur");
//     });
//     res.send('image is saved')
// });










app.listen(port , () => {
    console.log(`project app listening on port ${port}`)
  })



connecttomongo();

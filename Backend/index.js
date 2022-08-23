const connecttomongo=require('./dbconnect');
var cors = require('cors')


const express = require('express')
const app = express()
const port = 5000

// app.use(express.urlencoded({ extended: true }));

app.use(cors())


app.use(express.json())



app.use('/api/auth',require('./routes/auth'))





// app.get('/otp', function (req, res) {
//   res.render('inbox');
// });



// app.listen(port, '192.168.43.92' , () => {
//   console.log(`project app listening on port ${port}`)
// })

app.listen(port , () => {
    console.log(`project app listening on port ${port}`)
  })



connecttomongo();

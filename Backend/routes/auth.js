const express = require('express')
const router = express.Router()
const Admin = require('../models/Admin')
const Trainer = require('../models/Trainer')
const Student = require('../models/Student')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')


//Jwt secret
const jwtsecret = "Hani123";
// const a = process.env.REACT_APP_SECRET ;
// const jwtsecret =a ;

// ROUTE:1 creating a user with POST : /api/auth/createuser  
var email;

router.post('/createuser',
  [
    body('firstname', 'Enter a valid first name').isLength({ min: 3 }),
    body('lastname', 'Enter a valid last name').isLength({ min: 3 }),
    body('email', 'Enter a valid last email').isEmail(),
    body('contactno', 'Enter a valid Contact number').exists(),
    body('cnic', 'Enter a valid CNIC').exists(),
    body('designation', 'Enter a valid last email').exists(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('password', 'Password must contain a numner').matches(/\d/),
    body('password').isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
      returnScore: false,
      pointsPerUnique: 0,
      pointsPerRepeat: 1,
      pointsForContainingLower: 0,
      pointsForContainingUpper: 0,
      pointsForContainingNumber: 0,
      pointsForContainingSymbol: 0
    }).matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number")
  ]
  , async (req, res) => {

    console.log(req.body)

    let success;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = 'unsigned'
      console.log(errors)
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      //checking whether the user with this email exists already

      let admin = await Admin.findOne({ email: req.body.email });
      let trainer = await Trainer.findOne({ email: req.body.email });
      let student = await Student.findOne({ email: req.body.email });
      if (admin || trainer || student) {
        success = 'unsigned'

        return res.status(400).json({ success, error: "Soory a user with this email already exists." })
      }

      const salt = await bcrypt.genSalt(10)
      const secretpassword = await bcrypt.hash(req.body.password, salt)

      //for confirm password
      // if (req.body.password !== req.body.cpassword) {
      //   success=false
      //   console.log('paswords didnt matched');
      //   return res.status(400).json({success, error: "Passwords didnt match." }
      //   )
      // }



      if (req.body.designation === 'Trainer') {
        Trainers = await Trainer.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          contactno: req.body.contactno,
          cnic: req.body.cnic,
          designation: req.body.designation,
          password: secretpassword,
          status: req.body.status

        })


        // Payload
        const data = {
          Trainers: {
            id: Trainers.id
          }
        }



        email = req.body.email;



        const trainerauthtoken = jwt.sign(data, jwtsecret);
        console.log(trainerauthtoken);

        success = 'signed'
        res.json({ success, trainerauthtoken });

      }
      else if (req.body.designation === 'Admin') {
        // * creating a new user *
        admin = await Admin.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          contactno: req.body.contactno,
          cnic: req.body.cnic,
          designation: req.body.designation,
          password: secretpassword,
          status: req.body.status

        })


        // Payload
        const data = {
          admin: {
            id: admin.id
          }
        }

        email = req.body.email;


        const adminauthtoken = jwt.sign(data, jwtsecret);
        console.log(adminauthtoken);

        success = 'signed'
        res.json({ success, adminauthtoken });
      }

      else if (req.body.designation === 'Student') {
        // * creating a new user *
        student = await Student.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          contactno: req.body.contactno,
          cnic: req.body.cnic,
          designation: req.body.designation,
          password: secretpassword,
          status: req.body.status

        })


        // Payload
        const data = {
          student: {
            id: student.id
          }
        }

        email = req.body.email;


        const studentauthtoken = jwt.sign(data, jwtsecret);
        console.log(studentauthtoken);

        success = 'signed'
        res.json({ success, studentauthtoken });
      }


    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured")
    }
  })


//   ****  ROUTE:2 creating a LOGIN with POST : /api/auth/login  ****  

router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password can not be blanked').exists()

], async (req, res) => {

  let success = false; // status
  let t, adminkey, studentkey, trainerkey;  //key just like status

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    let student = await Student.findOne({ email });
    let trainer = await Trainer.findOne({ email });


    // if (!admin) {
    //   success = false;
    //   t = 'e';
    //   return res.status(400).json({ success, t, error: 'The user with this email doesnt exists.' })
    //   // res.send('The user with this email doesnt exists.');
    // }

    if (admin) {
      //Comparing Password
      const passwordcompare = await bcrypt.compare(password, admin.password)

      if (!passwordcompare) {
        success = false;
        t = 'f'
        adminkey = 'f';
        console.log('Admin password doesnt matched');
        return res.status(400).json({ success, t, adminkey, error: 'Please try to login with correct credentials/Admin password not found.' })
      }

      //pay load
      const data = {
        admin: {
          id: admin.id
        }
      }



      const adminauthtoken = jwt.sign(data, jwtsecret);
      console.log(adminauthtoken);
      t = 't'
      adminkey = 't'
      success = true;
      res.json({ success, t, adminkey, adminauthtoken });
      console.log("Admin matched")
    }
    else if (trainer) {
      const passwordcompare = await bcrypt.compare(password, trainer.password)
      if (!passwordcompare) {
        success = false;
        t = 'f'
        trainerkey = 'f'

        console.log('Trainer password doesnt matched');
        return res.status(400).json({ success, t, trainerkey, error: 'Please try to login with correct credentials/Trainer password not found.' })
      }
      //pay load
      const data = {
        tariner: {
          id: trainer.id
        }
      }

      const trainerauthtoken = jwt.sign(data, jwtsecret);
      console.log(trainerauthtoken);
      t = 't'
      adminkey = 't'
      success = true;
      res.send({ success, t, trainerkey, trainerauthtoken });
      console.log("trainer matched")

    }
    else if (student) {
      const passwordcompare = await bcrypt.compare(password, student.password)
      if (!passwordcompare) {
        success = false;
        t = 'f'
        studentkey = 'f'
        console.log('student password doesnt matched');
        return res.status(400).json({ success, t, studentkey, error: 'Please try to login with correct credentials/Student password not found.' })
      }
      //pay load
      const data = {
        student: {
          id: student.id
        }
      }

      const studentauthtoken = jwt.sign(data, jwtsecret);
      console.log(studentauthtoken);
      t = 't'
      studentkey = 't'
      success = true;
      res.send({ success, t, studentkey, studentauthtoken });
      console.log("stduent matched")
    }
    else {
      // if (!passwordcompare) {
      success = false;
      t = 'f'

      console.log('Please try to login with correct credentials/Password not found.');
      return res.status(400).json({ success, t, error: 'Please try to login with correct credentials/password not found.' })
      // }
    }












  }


  catch (error) {
    console.error(error.message);
    res.status(500).json("some error occured")
  }

})


// ***************************************   OTP Verification  Starts  **************************************************

//    OTP GENRATE FUNCTION

var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);



let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 5000,
  secure: true,
  service: 'gmail',
  auth: {
    user: 'ahmedhannan846@gmail.com',//use your own email 
    pass: 'utmwfnjnteyvdimt',  //use your own email pass
  },
  tls: {
    rejectUnAuthorized: true
  }

});

//    *****************************    Generate OTP API    *********************************************
var sta;
router.post('/gotp'
  , async (req, res) => {


    // send mail with defined transport object
    var mailOptions = {
      to: email,
      subject: "Otp for registration is: ",
      html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;   color:red  '>" + otp + "</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        sta = 'f'
        console.log(error);
      }
      else {
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        sta = 't';

      }


    });

    res.json({ sta })

  })

//    *****************************    Verify OTP API     *********************************************
let veri = false;
router.post('/votp'
  , async (req, res) => {
    if (req.body.otp == otp) {
      // res.json("You has been successfully registered");
      console.log('You has been successfully registered')
      veri = true;

    }
    else {
      // res.render('otp', { msg: 'otp is incorrect' });
      // res.json("Invalid otp ");
      console.log(' Not Successful')
      veri = false;
    }


    res.json({ veri })
  })

//    *****************************    Resend OTP API     *********************************************

//This Api will use the same Email which the usere have entered while signing up

router.post('/rotp'
  , async (req, res) => {

    var mailOptions = {
      to: email,
      subject: "Otp for registration is: ",
      html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.json("otp has been sent");
    });

  })


// ****************************************************************************************************


































// // ROUTE:3   Get logged in user details using Post : /api/auth/getuser   login required  
// router.post('/getuser', fetchuser

//   , async (req, res) => {



//     try {
//       UserId = req.user.id;
//       const user = await User.findById(UserId).select("-password")
//       res.json(user)
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("some error occured")
//     }

//   })
module.exports = router



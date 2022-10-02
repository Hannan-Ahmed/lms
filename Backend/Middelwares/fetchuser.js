var jwt = require('jsonwebtoken')

const jwtsecret = "Hani123";
const fetchuser = (req, res, next) => {

    //getting/decoding the user from the jwt tocken and add id to to req the object

    // const admintocken=req.header('adminauthtoken') 
    const trainertocken = req.header('trainerauthtoken')

    if (!trainertocken) {
        res.status(401).send({ error: "please authenticate using a valid tocken" })
    }
    try {
        const data = jwt.verify(trainertocken, jwtsecret);
        req.trainer = data.trainer; //yahan per hum user ko equal kar rahen hen us user k sath jis ka eail match karta he req.user se
        next();
    } catch (error) {
        res.status(401).send({ error: "please authenticate using a valid tocken" })
    }
}

module.exports = fetchuser;
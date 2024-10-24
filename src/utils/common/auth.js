const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();



 function checkPassword (plainPassword , encryptedPassword) {
    // console.log("inside check passwrod");
    try {
        
 
     return bcrypt.compareSync(plainPassword,encryptedPassword);
 
    } catch(error) {
      
     console.log(error);
     throw error;
      
    }
 }


  function createToken (input) {

    try {
     return jwt.sign(input , 'pikachuu47'  , {expiresIn:'1h'} )
    } catch(error) {
     console.log(error);
     throw error;
      
    }
 }


 module.exports = {
    checkPassword,
    createToken

 }
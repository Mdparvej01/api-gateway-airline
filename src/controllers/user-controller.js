const {StatusCodes}= require('http-status-codes')

const {UserService} = require('../services')





async function signup (req,res) {
      
    try {

        const user = await UserService.create({
            email:req.body.email,
            password:req.body.password

        })

        return res 
                .status(200)
                .json({
                    success:true,
                    user
                })

    } catch(error) {
        
        return res 
                .status(200)
                .json({
                    success:false,
                    error
                })

    }
}



async function signin(req,res) {

    console.log("inside signin..");
      
    try {

        const user = await UserService.signin({
            email:req.body.email,
            password:req.body.password

        })

        return res 
                .status(200)
                .json({
                    success:true,
                    user
                })

    } catch(error) {
        
        return res 
                .status(200)
                .json({
                    success:false,
                    error
                })

    }
}

module.exports = {
    signup,
    signin
}
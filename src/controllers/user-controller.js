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

module.exports = {
    signup
}
const {StatusCodes} = require('http-status-codes');

const {ErrorResponse}  = require('../utils/common')

const AppError = require ('../utils/errors/app-error')

const {UserService} = require('../services/user-service')



function validateAuthRequest (req,res,next) {
    if(!req.body.email) {
        ErrorResponse.message = 'Something went wrong while creating city' ;
        ErrorResponse.error = new AppError(['Email name not found in the incoming request in the correct form'])

        return res 
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);
    }

    if(!req.body.password) {
        ErrorResponse.message = 'Something went wrong while creating city' ;
        ErrorResponse.error = new AppError(['password  not found in the incoming request in the correct form'])

        return res 
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);
    }
    next();
}

function checkAuth(req,res,next) {

    try {

        const response = UserService.isAuthenticated(req.headers['x-access-token']) ;

        if(response) {
             req.user = response;   //req.user have response
             next();
        }


    } catch(error){
           
        return res
                .status(403)
                .json(error)

    }


   
}

module.exports = {
    validateAuthRequest,
    checkAuth
}
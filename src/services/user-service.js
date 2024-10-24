const { StatusCodes } = require('http-status-codes');
const { UserRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')
const bcrypt = require('bcrypt');
const userRepo = new UserRepository();
const {Auth} = require('../utils/common')

async function create(data) {
     

    try { 

        const user = await userRepo.create(data);
        return user;

    } catch (error) {
 
         throw new AppError( error , StatusCodes.BAD_REQUEST)
        
    }

}

async function signin(data) { 

    try { 

        const user = await userRepo.getUserByEmail(data.email);
        
        if(!user) {
            throw new AppError( 'No user found with given email' , StatusCodes.NOT_FOUND)
        }
        
        const passwordMatched =  Auth.checkPassword(data.password , user.password);


        
        if(!passwordMatched){
            throw new AppError( 'Entered password is wrong' , StatusCodes.INTERNAL_SERVER_ERROR)
        }
        
        const jwt =  Auth.createToken({id:user.id , email:user.email});
        return jwt;

    } catch (error) {
        
         throw new AppError( error , StatusCodes.BAD_REQUEST)
        
    }

}


module.exports = {
    create,
    signin
}
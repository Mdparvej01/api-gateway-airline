const { StatusCodes } = require('http-status-codes');
const { UserRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')
const userRepo = new UserRepository();

async function create(data) {
     

    try {
        
        const user = await userRepo.create(data);
        return user;

    } catch (error) {
 
         throw new AppError( error , StatusCodes.BAD_REQUEST)
        
    }

}

module.exports = {
    create
}
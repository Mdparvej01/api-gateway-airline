const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: 5001,
    SALT_ROUNDS:8
}


// PORT: process.env.PORT,
//     SALT_ROUNDS:process.env.SALT_ROUNDS
const express = require('express');

// const { InfoController } = require('../../controllers');

const userRoutes = require('./user-routes');


const router = express.Router();

router.use('/user' , userRoutes);




module.exports = router;
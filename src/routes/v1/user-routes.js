const express = require('express');

const router = express.Router();

const {UserController} = require('../../controllers') ;
// const userRoutes = require('./')



router.post('/signup' , UserController.signup) ;

router.post('/signin' , UserController.signin) ;


module.exports = router ; 
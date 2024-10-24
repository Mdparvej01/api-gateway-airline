const express = require('express');

const router = express.Router();

const {UserController} = require('../../controllers') ;
// const userRoutes = require('./')



router.post('/' , UserController.signup) ;

module.exports = router ; 
const express = require('express');

const { check, body } = require('express-validator/check')
const User  = require('../models/user')
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login',[
  body('email')
  .isEmail()
  .withMessage('Enter a valid email addres'),
  body('password','Password has to be valid')
  .isLength({min: 5})
  .isAlphanumeric()
], authController.postLogin);

router.post(
  '/signup', 
  [ 
  check('email')
  .isEmail()
  .withMessage('Enter a valid email')
  .custom((value, {req})=>{
    return User
    .findOne({ email: value })
    .then(userDoc => {
      if (userDoc) {
        if(userDoc){
          return Promise.reject('Email already exists')
        }
        return res.redirect('/signup');
      }
    })
    .catch(err=>{console.log(err)})
  })
    ,
  body('password','Enter password with number rand text at least 5 character')
  .isLength({min: 5})
  .isAlphanumeric(),
  body('confirmPassword','Enter password with number rand text at least 5 character')
  .custom((value,{req})=>{
    if(value !== req.body.password){
      throw new Error('Passwords have to match')
    }
    return true;
  })
  ],
  authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
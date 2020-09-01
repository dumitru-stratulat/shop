const path = require('path');

const express = require('express');
<<<<<<< HEAD
const { body } = require('express-validator/check')

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

//admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// // /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title')
      .isAlphanumeric()
      .isLength({ min: 3 })
      .trim(),
    body('imageUrl')
      .isURL(),
    body('price')
      .isFloat()
      .trim(),
    body('description')
      .isLength({ min: 5, max: 500 })
      .trim()
  ],
  isAuth,
  adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('imageUrl')
      .isURL(),
    body('price')
      .isFloat()
      .trim(),
    body('description')
      .isLength({ min: 5, max: 500 })
      .trim()
  ],
  isAuth,
  adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);
=======

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);
>>>>>>> 1c8fab9cf4a02c0e2d795794443176d8f2627ae1

module.exports = router;

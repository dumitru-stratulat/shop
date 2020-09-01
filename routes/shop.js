const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
<<<<<<< HEAD
const isAuth = require('../middleware/is-auth');
=======
>>>>>>> 1c8fab9cf4a02c0e2d795794443176d8f2627ae1

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

<<<<<<< HEAD
router.get('/cart', isAuth,shopController.getCart);

router.post('/cart', isAuth,shopController.postCart);

router.post('/cart-delete-item', isAuth,shopController.postCartDeleteProduct);

router.post('/create-order', isAuth,shopController.postOrder);

router.get('/orders', isAuth,shopController.getOrders);
=======
router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);
>>>>>>> 1c8fab9cf4a02c0e2d795794443176d8f2627ae1

module.exports = router;

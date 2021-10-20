const { Router } = require('express');
const router = Router();
const {productsController} = require('../controllers');

router.get('/uno', productsController.getProduct);

router.get('/', productsController.getProducts);

router.post('/', productsController.createProducts);

router.put('/', productsController.updateProducts);

router.delete('/', productsController.deleteProducts);

module.exports = router;
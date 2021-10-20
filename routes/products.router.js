const { Router } = require('express');
const router = Router();
const {salesController} = require('../controllers');

router.get('/uno', salesController.getSale);

router.get('/', salesController.getSales);

router.post('/', salesController.createSales);

router.put('/', salesController.updateSales);

router.delete('/', salesController.deleteSales);

module.exports = router;
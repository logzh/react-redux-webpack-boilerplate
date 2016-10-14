var express = require('express');
var router = express.Router();

router.put('/cart/:id([0-9]+)', function(req, res, next) {
  res.json(require('../json/mall/cart.json'));
});
router.delete('/cart/:id([0-9]+)', function(req, res, next) {
  res.json(require('../json/mall/cart.json'));
});
router.get('/cart', function(req, res, next) {
  res.json(require('../json/mall/cart.json'));
});
router.post('/cart', function(req, res, next) {
  res.json(require('../json/mall/cart.add.json'));
});

module.exports = router;

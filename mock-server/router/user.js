var express = require('express');
var router = express.Router();

router.get('/info', function(req, res, next) {
  res.json(require('../json/user/info.json'));
});

module.exports = router;

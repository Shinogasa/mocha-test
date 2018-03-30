var express = require('express');
var router = express.Router();

router.hello = function(msg) {
    return 'Hello ' + msg;
};

/* GET home page. */
router.get('/:msg', function(req, res, next) {
  res.render('index', { title: router.hello(req.params.msg) });
});

module.exports = router;

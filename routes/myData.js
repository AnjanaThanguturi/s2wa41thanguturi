var express = require('express');
var router = express.Router();

/* GET myData page. */
router.get('/', function(req, res, next) {
  res.render('myData', { title: 'AnjanaThanguturi' });
});

module.exports = router;

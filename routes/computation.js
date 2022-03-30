var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  var random = Math.random().toFixed(2);
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }

  //computing
  let abs = Math.abs(x).toFixed(2)
  let acos = Math.acos(x).toFixed(2)
  let sin = Math.sin(x).toFixed(2)
  let sinh = Math.sinh(x).toFixed(2)

  res.render('computation', {
    title: 'Computation',
    value1: `Math.abs() applied to ` + x + ` is ${Math.abs(x).toFixed(2)}`,
    value2: `Math.acos() applied to ` + x + ` is ${Math.acos(x).toFixed(2)}`,
    value3: `Math.sin() applied to ` + x + ` is ${Math.sin(x).toFixed(2)}`,
    value4: `Math.sinh() applied to ` + x + ` is ${Math.sinh(x).toFixed(2)}`
  });
});

module.exports = router;

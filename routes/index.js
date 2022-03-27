var express = require('express');
var router = express.Router();
var os = require('os')



/* GET home page. */
router.get('/', function (req, res, next) {
  // var ip = req.headers['x-forwarded-for'] ||
  //    req.socket.remoteAddress ||
  //    null;
  var ip = "x-forwarded-for:" + req.headers['x-forwarded-for'] + " remoteAddress:" + req.socket.remoteAddress + " ip:" + req.ip;

  console.log("IP : " + ip);
  res.render('index', { title: 'Express', host: os.hostname(),source_ip: ip });
});

module.exports = router;
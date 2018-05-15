var express = require('express');
var router = express.Router();
var express = require('express');
var router = express.Router();

var datacardprofil = []
var dataprofil = [
  {name: "Morgan Gautier", url:"/images/avatar-1.jpg", info: "faculté de nanterre"},
  {name: "Andrea Marotti", url:"/images/avatar-2.jpg", info: "faculté de nanterre"},
  {name: "Delicia Mastrande", url:"/images/avatar-3.jpg", info: "faculté de nanterre"},
  {name: "Charles Milot", url:"/images/avatar-4.jpg", info: "faculté de nanterre"},
  {name: "David Malo", url:"/images/avatar-5.jpg", info: "faculté de nanterre"},
  {name: "Thierry François", url:"/images/avatar-1.jpg", info: "faculté de nanterre"},

]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', );
});

router.get('/home', function(req, res, next) {
  res.render('index', );
});



module.exports = router;

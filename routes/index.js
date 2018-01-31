var express = require('express');
var router = express.Router();
var path = require('path');
var traverse = require('fs-tree-traverse');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  var imageList = traverse.list(path.join(__dirname, '../public/images'), function (err, files) {
    res.render('index', { title: 'Express',imageList:files});
  });

 
});

module.exports = router;

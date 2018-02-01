var express = require('express');
var router = express.Router();
var path = require('path');
var traverse = require('fs-tree-traverse');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  var imageList = traverse.list(path.join(__dirname, '../public/images'), function (err, files) {
    var filesList = []
    for (i = 0; i < files.length; i++) { 
      filesList.push(files[i].slice(0, -4).match(/([^\/]*)\/*$/)[1])
    
    
  }
    res.render('index', { title: 'Grocery Store',imageList:filesList});
  });

 
});

module.exports = router;

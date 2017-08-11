const express = require('express');
const app = express();
const mysql     =    require('mysql');
var router = express.Router();
const fs = require('fs');
var multer = require('multer');
var upload = multer({dest:'public/uploads/'});

router.get('/',function (req,res) {
  res.render('pages/index');
});

router.post('/', upload.array(), function (req,res) {
// var k = req.files;
// console.log(k);
// res.render('pages/index');
console.log(req.body);
res.send(req);
})

module.exports = router;

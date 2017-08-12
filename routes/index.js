const express = require('express');
var router = express.Router();
const fs = require('fs');
var multer = require('multer');
var upload = multer({dest:'public/uploads/'});

// var csvParser = require('csv-parse');

// const app = express();

var db = require('../config/db');

// router.get('/',function (req,res) {
//   console.log("abra");
//   res.render('pages/index');
// });

router.get('/', function(req, res) {
  collection.find().toArray(function(err, items) {});
  // var collection = db.collection('testing');
  // console.log(collection);
  // collection.find({},{},function(e,docs){
  //   console.log(docs);
  //   res.json(docs);
  // });
  // res.render('index', { title: 'Express' });
});

// router.post('/', upload.array(), function (req,res) {
// // var k = req.files;
// // console.log(k);
// // res.render('pages/index');
// console.log(req.body);
// res.send(req);
// });



module.exports = router;

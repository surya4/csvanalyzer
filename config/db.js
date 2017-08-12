var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/testing", function(err, database) {
  if(err) throw err;

  db = database;

  // Start the application after the database connection is ready
  // app.listen(3000);
  console.log("DB is connected");

  var collection = db.collection('testing');
  var doc1 = {'hello':'doc1'};
  var doc2 = {'hello':'doc2'};
  var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

  collection.insert(doc1);

  collection.insert(doc2, {w:1}, function(err, result) {});

  collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
});

// Reuse database object in request handlers
// app.get("/", function(req, res) {
//   db.collection("testing").find({}, function(err, docs) {
//     docs.each(function(err, doc) {
//       if(doc) {
//         console.log(doc);
//       }
//       else {
//         res.end();
//       }
//     });
//   });
// });

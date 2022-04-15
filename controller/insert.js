const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const modelObj = require('../models/mongoModel')



const insertData = function (req, res) {

    MongoClient.connect(process.env.url, function (err, db) {
        if (err) throw err;
        var database = db.db("exam-time");
        

                const obj = new modelObj({
                    _id: mongoose.Schema.Types.ObjectId,
                    Firstname: req.body.Firstname,
                    Lastname: req.body.Lastname,
                    Email: req.body.Email,
                    Date: req.body.Date,
                    Gender: req.body.Gender,
                    Address: req.body.Address,
                    Mobile_no: req.body.Mobile_no,
                    
                })

                database.collection("user").insertOne(obj, function (err, db) {
                    if (err) throw err;
                    console.log("1 document inserted");

                    db.close
                })

            })
        
        }




        

module.exports = { insertData }


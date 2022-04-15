const MongoClient = require('mongodb').MongoClient;



const updateOneData = function(){


    MongoClient.connect(process.env.url, function(err, db) {
        if (err) throw err;
        var database = db.db("exam-time");
        var myquery = { Lastname: "verma" };
        var newvalues = { $set: {Firstname: "Sneha", Lastname: "Khadse" } };
        database.collection("user").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        });
      });
}
module.exports = {updateOneData};

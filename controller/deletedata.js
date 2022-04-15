const MongoClient = require('mongodb').MongoClient;



const deleteOneData = function(req,res,next){
    
    MongoClient.connect(process.env.url, function(err, db) {
        if (err) throw err;
        var database = db.db("exam-time");
        var myquery = {Firstname: "nikita"}
        database.collection("user").deleteOne(myquery, function(err, result) {
          if (err) throw err;
          console.log("1 document deleted");
          res.send('delete')
          db.close();
        });
      });

}
module.exports = {deleteOneData};

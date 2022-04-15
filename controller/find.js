const MongoClient = require('mongodb').MongoClient;





const findData = function(req,res){
    

MongoClient.connect(process.env.url ,function(err, db) {
  if (err) throw err;
  var database = db.db("exam-time");
  database.collection("user").findOne({Firstname:req.body.Firstname}, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    db.close();
  });
});
}


module.exports = {findData}
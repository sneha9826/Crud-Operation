const express = require('express');

const mongoModel = require('./models/mongoModel');

const app = express();

const route = require("./routers/mongoRoute");

require('dotenv').config()


app.use(express.json());

app.get("/", (req, res)=>{
  res.send("Hello from index.js");
})

app.use('/', route)

app.listen(5000, (console.log("Listening Server at 5000")))
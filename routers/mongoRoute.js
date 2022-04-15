const express = require('express');

const router = express.Router();

const insertOne = require("../controller/insert");
const find = require("../controller/find");
const del = require("../controller/deletedata");
const update = require("../controller/update");


router.post('/insert-one', insertOne.insertData);
router.get('/find-one',find.findData);
router.delete('/delete',del.deleteOneData);
router.put('/update',update.updateOneData)





module.exports = router;
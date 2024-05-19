var express = require('express');
var router = express.Router();
let userModel = require('./index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Basic connecting
router.get('/data', async function(req, res) {
  const userRes = await userModel.create({
    username: "Aayush",
    name: "aayush",
    age: 19
  })
  res.send(userRes);  
})

/* 
  reading the data
*/
router.get('/alldata', async(req,res)=>{
  const allusersdata = await userModel.findOne
  ({
    username: "Mongodb"
  })
  res.send(allusersdata);
})

module.exports = router;

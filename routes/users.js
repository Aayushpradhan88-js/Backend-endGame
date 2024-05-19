var express = require('express');
var router = express.Router();
let userModel = require('./index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/data', async function(req, res) {
  const userRes = await userModel.create({
    username: "Aayush",
    name: "aayush",
    age: 19
  })

  res.send(userRes);  
})

module.exports = router;

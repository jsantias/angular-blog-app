var express = require('express');
var router = express.Router();

/* GET testing endpoint */
router.get('/ping', function(req, res) {
  res.status(200).send('pong');
});

/* POST save data to db */
router.post('/', function(req, res){
  try {
    // save data to the db

    res.status(200).send('success');
  } catch (error) {
    res.status(400).send('Error occured:', error);
  }
});

module.exports = router;

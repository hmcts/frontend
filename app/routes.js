const express = require('express');
const router = express.Router();

router.get('/app/', function(req, res) {
  res.render('index');
});

module.exports = router;
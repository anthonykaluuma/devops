var express = require("express");
var router = express.Router();
var os = require('os')

router.get("/", function(req, res, next) {
    res.write('Hi there! I\'m being served from ' + os.hostname())
  res.end()
});

module.exports = router;

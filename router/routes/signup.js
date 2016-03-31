// Include Express
var express = require('express');

// Initialize Router
var router = express.Router();

//Setup the Route
router.post('/', function(req, res){
    //Show the request body in command line
    console.log(req.body);
    res.json({
        'msg': "success!"
        });
    });

module.exports = router;

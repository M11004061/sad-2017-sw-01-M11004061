var express = require('express');
var router = express.Router();

router.get('/restaurants', function(req, res, next){
	res.send('RESTAURANTS API');
})

module.exports = router;
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('test', ['restaurants']);

//Get all restaurants
router.get('/restaurants', function(req, res, next){
	db.restaurants.find(function(err, restaurants){
		if(err){
			res.send(err);
		}
		res.json(restaurants);
	});
});

//Get one restaurants
router.get('/restaurant/:id', function(req, res, next){
	db.restaurants.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, restaurant){
		if(err){
			res.send(err);
		}
		res.json(restaurant);
	});
});

//Save restaurant
router.post('/restaurant', function(req, res, next){
	var restaurant = req.body;
	if(!restaurant.title || (restaurant.isDone + '')){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.restaurants.save(restaurant, function(err, restaurant){
			if(err){
				res.send(err);
			}
			res.json(restaurant);
		});
	}
});

//Delete restaurant
router.delete('/restaurant/:id', function(req, res, next){
	db.restaurants.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, restaurant){
		if(err){
			res.send(err);
		}
		res.json(restaurant);
	});
});

//Update restaurant
router.put('/restaurant/:id', function(req, res, next){
	var restaurant = req.body;
	var updTask = {};
	
	if(restaurant.isDone){
		updTask.isDone = task.isDone;
	}
	
	if(restaurant.title){
		updTask.title = task.title;
	}
	
	if(!updTask){
		res.status(400);
		res.json({
			"error":"Bad Data"
		});
	} else {
		db.restaurants.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, restaurant){
			if(err){
				res.send(err);
			}
			res.json(restaurant);
		});
	}
});

module.exports = router;
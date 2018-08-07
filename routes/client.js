const express = require('express');
const router = express.Router();
const Client = require('../models/client.js');

//lista os clientes
router.get('/client', function(req, res, next){
	
	Client.GeoNear(
		{type:"Pont", coordinates:[parseFloat(req.query.lng),parseFloat(req.quert.lat)]},
		{maxDistance:100000,spherical:true}
	).then(function(client){
		res.send(client);
	}).catch(err => res.status(400).send(err.message));

});

//cadastrar cliente
router.post('/client', function(req, res, next){
	
	Client.create(req.body).then(function(client){
		res.send(client);
	}).catch(err => res.status(400).send(err.message));

});

//alterar cliente
router.put('/client/:id', function(req, res, next){
	
	Client.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(client){
		Client.findOne({_id: req.params.id}).then(function(client){
			res.send(client);
		});
	}).catch(err => res.status(400).send(err.message));

});

//deletar cliente por id
router.delete('/client/:id', function(req, res, next){
	
	Client.findByIdAndRemove({_id: req.params.id}).then(function(client){
		res.send(client);
	}).catch(err => res.status(400).send(err.message));

});

module.exports = router;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Set up default mongoose connection
mongoose.connect('mongodb://localhost/apiDB');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//listar a requisição
app.listen(process.env.port || 4000, function(){
	console.log('agora recebendo uma requisição');
});

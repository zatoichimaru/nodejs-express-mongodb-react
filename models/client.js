const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//criado esquema de geolocalizaçao
const GeolocationSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
});

//criado esquema de cliente
const ClientSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Campo obrigatorio']
    },
    rank:{
        type:String
    },
    available:{
        type:Boolean,
        default:false
    },
    geometry:GeolocationSchema
});

const Client = mongoose.model('Client',ClientSchema);
module.exports = Client;
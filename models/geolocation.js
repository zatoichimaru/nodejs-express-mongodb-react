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

const Geolocation = mongoose.model('Geolocation',GeolocationSchema);
module.exports = Geolocation;
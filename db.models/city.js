const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Country} = require('./country');
const {Currency} = require('./currency');

// define schema
const CitySchema = new Schema({
    name: { type : String, 
            required : [ true, 'City Name is required.'] },
    currency: { type : mongoose.Schema.Types.ObjectId, ref: Currency.modelName , 
                required : [ true, 'Currency is required.'] },
    country: { type: mongoose.Schema.Types.ObjectId, ref: Country.modelName, 
                     required : [true, 'Country is required.'] },
});

// create model
let City = mongoose.model('City', CitySchema);

// export
module.exports = {City};
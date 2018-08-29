let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {CurrencyModelName} = require('./currency'); 
const {CountryModelName} = require('./country');
const CityModelName = 'City'; // for bidirectional dependency because of declaring virtuals
const CityVirtualsName = 'cities'; 

let InjectMongoose = (mongooseOther) => { mongoose = mongooseOther };

// define schema
const CitySchema = new Schema({
    name: { type : String, 
            required : [ true, 'City Name is required.'] },
    currency: { type : mongoose.Schema.Types.ObjectId, ref: CurrencyModelName,
                required : [ true, 'Currency is required.'] },
    country: { type: mongoose.Schema.Types.ObjectId, ref: CountryModelName, 
                     required : [true, 'Country is required.'] },
});

CitySchema.virtual('costs', {
        ref: 'Cost',
        localField: '_id', // Find items where `localField`
        foreignField: 'city', // is equal to `foreignField`
});

// create model
let City = mongoose.model(CityModelName, CitySchema);

// export
module.exports = {City,CityModelName,CityVirtualsName, InjectMongoose};
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../../constants').Models;

// define schema
const CitySchema = new Schema({
    name: { type : String, 
            required : [ true, 'City Name is required.'] },
    currency: { type : mongoose.Schema.Types.ObjectId, ref: constants.Currency.CurrencyModelName,
                required : [ true, 'Currency is required.'] },
    country: { type: mongoose.Schema.Types.ObjectId, ref: constants.Country.CountryModelName, 
                     required : [true, 'Country is required.'] },
});

CitySchema.virtual(constants.Cost.CostVirtualsName, {
        ref: constants.Cost.CostModelName,
        localField: '_id', // Find items where `localField`
        foreignField: 'city', // is equal to `foreignField`
});

// create model
let City = mongoose.model(constants.City.CityModelName, CitySchema);

// export
module.exports = {
        City,
};
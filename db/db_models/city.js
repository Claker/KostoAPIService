let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Models} = require('../../constants');

// define schema
const CitySchema = new Schema({
    name: { type : String, 
            required : [ true, 'City Name is required.'] },
    currency: { type : mongoose.Schema.Types.ObjectId, ref: Models.Currency.CurrencyModelName,
                required : [ true, 'Currency is required.'] },
    country: { type: mongoose.Schema.Types.ObjectId, ref: Models.Country.CountryModelName, 
                     required : [true, 'Country is required.'] },
});

CitySchema.virtual(Models.Cost.CostVirtualsName, {
        ref: Models.Cost.CostModelName,
        localField: '_id', // Find items where `localField`
        foreignField: 'city', // is equal to `foreignField`
});

// create model
let City = mongoose.model(Models.City.CityModelName, CitySchema);

// export
module.exports = {
        City,
};
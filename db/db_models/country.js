let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Models} = require('../../constants');

// define schema
const CountrySchema = new Schema({
    name: { type : String, 
            required : [ true, 'Country Name is required.'] },
});

CountrySchema.virtual(Models.City.CityVirtualsName, {
    ref: Models.City.CityModelName,
    localField: '_id', // Find cities where `localField`
    foreignField: 'country', // is equal to `foreignField`
});

// create model
let Country = mongoose.model(Models.Country.CountryModelName, CountrySchema);

// export
module.exports = {
    Country,
};
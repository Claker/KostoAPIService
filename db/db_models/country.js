let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../../constants').Models;

let InjectMongoose = (mongooseOther) => mongoose = mongooseOther;

// define schema
const CountrySchema = new Schema({
    name: { type : String, 
            required : [ true, 'Country Name is required.'] },
});

CountrySchema.virtual(constants.City.CityVirtualsName, {
    ref: constants.City.CityModelName,
    localField: '_id', // Find cities where `localField`
    foreignField: 'country', // is equal to `foreignField`
});

// create model
let Country = mongoose.model(constants.Country.CountryModelName, CountrySchema);

// export
module.exports = {
    Country,
};
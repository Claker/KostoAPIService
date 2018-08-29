let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {CityModelName, CityVirtualsName} = require('./city');
const CountryModelName = 'Country'; // for bidirectional dependency because of declaring virtuals

let InjectMongoose = (mongooseOther) => {mongoose = mongooseOther};

// define schema
const CountrySchema = new Schema({
    name: { type : String, 
            required : [ true, 'Country Name is required.'] },
});

CountrySchema.virtual('cities', {
    ref: 'City',
    localField: '_id', // Find cities where `localField`
    foreignField: 'country', // is equal to `foreignField`
});

// create model
let Country = mongoose.model(CountryModelName, CountrySchema);

// export
module.exports = {Country,CountryModelName, InjectMongoose};
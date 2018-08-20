const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {City, CityModelName, CityVirtualsName} = require('./city');
const CurrencyModelName = 'Currency'; // for bidirectional dependency because of declaring virtuals

// define schema
const CurrencySchema = new Schema({
    name: { type : String, required : [ true, 'Currency Name is required.'] },
    shortName: { type : String, required : [ true, 'Currency Short Name is required.'] },
    sign: { type: String },
});

CurrencySchema.virtual('cities', {
    ref: 'City',
    localField: '_id', // Find cities where `localField`
    foreignField: 'currency', // is equal to `foreignField`
});

// create model
let Currency = mongoose.model('Currency', CurrencySchema);

// export
module.exports = {Currency,CurrencyModelName};
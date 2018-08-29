let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {CityModelName, CityVirtualsName} = require('./city');
const CurrencyModelName = 'Currency'; // for bidirectional dependency because of declaring virtuals

let InjectMongoose = (mongooseOther) => { mongoose = mongooseOther };

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

CurrencySchema.virtual('costs', {
    ref: 'Cost',
    localField: '_id', // Find items where `localField`
    foreignField: 'currency', // is equal to `foreignField`
});

// create model
let Currency = mongoose.model(CurrencyModelName, CurrencySchema);

// export
module.exports = {Currency,CurrencyModelName, InjectMongoose};
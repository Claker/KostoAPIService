let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../../constants').Models;

let InjectMongoose = (mongooseOther) => mongoose = mongooseOther;

// define schema
const CurrencySchema = new Schema({
    name: { type : String, /*required : [ true, 'Currency Name is required.']*/ },
    shortName: { type : String, /*required : [ true, 'Currency Short Name is required.']*/ },
    sign: { type: String, required : [ true, 'Currency Sign is required.'] },
});

CurrencySchema.virtual(constants.City.CityVirtualsName, {
    ref: constants.City.CityModelName,
    localField: '_id', // Find cities where `localField`
    foreignField: 'currency', // is equal to `foreignField`
});

CurrencySchema.virtual(constants.Cost.CostVirtualsName, {
    ref: constants.Cost.CostModelName,
    localField: '_id', // Find items where `localField`
    foreignField: 'currency', // is equal to `foreignField`
});

// create model
let Currency = mongoose.model(constants.Currency.CurrencyModelName, CurrencySchema);

// export
module.exports = {
    Currency,
};
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Models} = require('../../constants');

// define schema
const CurrencySchema = new Schema({
    name: { type : String, /*required : [ true, 'Currency Name is required.']*/ },
    shortName: { type : String, /*required : [ true, 'Currency Short Name is required.']*/ },
    sign: { type: String, required : [ true, 'Currency Sign is required.'] },
});

CurrencySchema.virtual(Models.City.CityVirtualsName, {
    ref: Models.City.CityModelName,
    localField: '_id', // Find cities where `localField`
    foreignField: 'currency', // is equal to `foreignField`
});

CurrencySchema.virtual(Models.Cost.CostVirtualsName, {
    ref: Models.Cost.CostModelName,
    localField: '_id', // Find items where `localField`
    foreignField: 'currency', // is equal to `foreignField`
});

// create model
let Currency = mongoose.model(Models.Currency.CurrencyModelName, CurrencySchema);

// export
module.exports = {
    Currency,
};
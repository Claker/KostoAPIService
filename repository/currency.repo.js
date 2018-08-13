// const {mongoose} = require('./mongoose');
const {Currency} = require('../db.models/currency');

// Create
let insertCurrency = (currency) => {
    return currency.save();
};

// Read
let getFirstCurrency = (query) => {
    return Currency.findOne(query);
};

let getCurrencies = (query) => {
    return Currency.find(query);
};

// Update
let updateFirstCurrency = (query,updateValues) => {
    return Currency.update(query,updateValues);
};

let updateAllCurrencies = (query,updateValues) => {
    return Currency.updateMany(query,updateValues);
};

// Delete
let deleteFirstCurrency = (query) => {
    return Currency.findOneAndDelete(query);
};

let deleteAllCurrencies = (query) => {
    return Currency.deleteMany(query);
};

module.exports = {insertCurrency, 
                getFirstCurrency, 
                getCurrencies, 
                updateFirstCurrency, 
                updateAllCurrencies,
                deleteAllCurrencies,
                deleteFirstCurrency};
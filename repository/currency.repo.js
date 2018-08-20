const {Currency} = require('../db.models/currency');

// Create
let insertCurrency = (currency) => 
{
    return currency.save();
};

// Read
let getFirstCurrency = (query) => 
{
    return Currency.findOne(query);
};

let getCurrencies = (query) => 
{
    return Currency.find(query);
};

let getAllCurrencies = () => 
{
    return Currency.find({});
};

// Update
let updateFirstCurrency = (query,updateValues) => 
{
    return Currency.update(query,updateValues);
};

let updateCurrencies = (query,updateValues) => 
{
    return Currency.updateMany(query,updateValues);
};

let updateAllCurrencies = (updateValues) => 
{
    return Currency.updateMany({},updateValues);
};

// Delete
let deleteFirstCurrency = (query) => 
{
    return Currency.findOneAndDelete(query);
};

let deleteCurrencies = (query) => 
{
    return Currency.deleteMany(query);
};

let deleteAllCurrencies = () => 
{
    return Currency.deleteMany({});
};

module.exports = {insertCurrency, 
                getFirstCurrency, 
                getCurrencies, 
                getAllCurrencies,
                updateFirstCurrency, 
                updateCurrencies,
                updateAllCurrencies,
                deleteFirstCurrency,
                deleteCurrencies,
                deleteAllCurrencies,
                };
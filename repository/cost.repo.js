const {Cost} = require('../db/db_models/cost');
const {City} = require('../db/db_models/city');
const constants = require('../constants').Models;

// Create
let insertCost = (cost) => {
    return (new Cost(cost)).save();
};

// Read
let getFirstCost = (query) => {
    return Cost.findOne(query);
};

let getCosts = (query) => {
    return Cost.find(query);
};

let getFirstCityWithCosts = (query) => 
{
    return City.findOne(query)
        .populate(constants.Cost.CostVirtualsName)
        .populate(constants.Country.CountryModelName.toLowerCase())
        .populate(constants.Currency.CurrencyModelName.toLowerCase())
        .exec();
};

// Update
let updateFirstCost = (query,updateValues) => {
    return Cost.update(query,updateValues);
};

let updateAllCosts = (query,updateValues) => {
    return Cost.updateMany(query,updateValues);
};

// Delete
let deleteFirstCost = (query) => {
    return Cost.findOneAndDelete(query);
};

let deleteAllCosts = (query) => {
    return Cost.deleteMany(query);
};

module.exports = {insertCost, 
                getFirstCost, 
                getCosts, 
                getFirstCityWithCosts,
                updateFirstCost, 
                updateAllCosts,
                deleteAllCosts,
                deleteFirstCost,
            };
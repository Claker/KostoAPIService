// const {mongoose} = require('./mongoose');
const {Cost} = require('../db.models/cost');

// Create
let insertCost = (cost) => {
    return cost.save();
};

// Read
let getFirstCost = (query) => {
    return Cost.findOne(query);
};

let getCosts = (query) => {
    return Cost.find(query);
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
    return Cost.delete(query);
};

let deleteAllCosts = (query) => {
    return Cost.deleteMany(query);
};

module.exports = {insertCost, 
                getFirstCost, 
                getCosts, 
                updateFirstCost, 
                updateAllCosts,
                deleteAllCosts,
                deleteFirstCost};
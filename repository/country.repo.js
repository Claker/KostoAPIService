// const {mongoose} = require('./mongoose');
const {Country} = require('../db.models/city');

// Create
let insertCountry = (country) => {
    return country.save();
};

// Read
let getFirstCountry = (query) => {
    return Country.findOne(query);
};

let getCountries = (query) => {
    return Country.find(query);
};

// Update
let updateFirstCountry = (query,updateValues) => {
    return Country.update(query,updateValues);
};

let updateAllCountries = (query,updateValues) => {
    return Country.updateMany(query,updateValues);
};

// Delete
let deleteFirstCountry = (query) => {
    return Country.delete(query);
};

let deleteAllCountries = (query) => {
    return Country.deleteMany(query);
};

module.exports = {insertCountry, 
                getFirstCountry, 
                getCountries, 
                updateFirstCountry, 
                updateAllCountries,
                deleteAllCountries,
                deleteFirstCountry};
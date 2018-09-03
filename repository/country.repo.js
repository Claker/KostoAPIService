const {Country} = require('../db_models/country');

// Create
let insertCountry = (country) => 
{
    return country.save();
};

// Read
let getFirstCountry = (query) => 
{
    return Country.findOne(query);
};

let getCountries = (query) => 
{
    return Country.find(query);
};

let getAllCountries = () => 
{
    return Country.find({});
};

// Update
let updateFirstCountry = (query,updateValues) => 
{
    return Country.update(query,updateValues);
};

let updateCountries = (query,updateValues) => 
{
    return Country.updateMany(query,updateValues);
};

let updateAllCountries = (updateValues) => 
{
    return Country.updateMany({},updateValues);
};

// Delete
let deleteFirstCountry = (query) => 
{
    return Country.findOneAndDelete(query);
};

let deleteAllCountries = () => 
{
    return Country.deleteMany({});
};

let deleteCountries = (query) => 
{
    return Country.deleteMany(query);
};

module.exports = {insertCountry, 
                getFirstCountry, 
                getCountries, 
                getAllCountries, 
                updateFirstCountry, 
                updateCountries,
                updateAllCountries,
                deleteFirstCountry,
                deleteCountries,
                deleteAllCountries,
                };
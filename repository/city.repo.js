const {City} = require('../db_models/city');
const {Country} = require('../db_models/country');
const {Currency} = require('../db_models/currency');
const constants = require('../constants').Models;

// Create
let insertCity = (city) => 
{
    return city.save();
};

// Read
let getFirstCity = (query) => 
{
    return City.findOne(query);
};

let getCities = (query) => 
{
    return City.find(query);
};

let getAllCities = () => 
{
    return City.find({});
};

let getCitiesByCountry = (query) => 
{
    return Country.findOne(query).populate(constants.City.CityVirtualsName).exec();
};

let getCitiesByCurrency = (query) => 
{
    return Currency.findOne(query).populate(constants.City.CityVirtualsName).exec();
};

// Update
let updateFirstCity = (query,updateValues) => 
{
    return City.update(query,updateValues);
};

let updateCities = (query,updateValues) => 
{
    return City.updateMany(query,updateValues);
};

let updateAllCities = (updateValues) => 
{
    return City.updateMany({},updateValues);
};

// Delete
let deleteFirstCity = (query) => {
    return City.findOneAndDelete(query);
};

let deleteCities = (query) => {
    return City.deleteMany(query);
};

let deleteAllCities = () => {
    return City.deleteMany({});
};

module.exports = {insertCity, 
                getFirstCity, 
                getCities, 
                getAllCities,
                getCitiesByCountry,
                getCitiesByCurrency,
                updateFirstCity, 
                updateCities,
                updateAllCities,
                deleteFirstCity,
                deleteCities,
                deleteAllCities,
                };
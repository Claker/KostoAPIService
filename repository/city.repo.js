const {City} = require('../db.models/city');

// Create
let insertCity = (city) => {
    return city.save();
};

// Read
let getFirstCity = (query) => {
    return City.findOne(query);
};

let getCities = (query) => {
    return City.find(query);
};

// Update
let updateFirstCity = (query,updateValues) => {
    return City.update(query,updateValues);
};

let updateAllCities = (query,updateValues) => {
    return City.updateMany(query,updateValues);
};

// Delete
let deleteFirstCity = (query) => {
    return City.findOneAndDelete(query);
};

let deleteAllCities = (query) => {
    return City.deleteMany(query);
};

module.exports = {insertCity, 
                getFirstCity, 
                getCities, 
                updateFirstCity, 
                updateAllCities,
                deleteAllCities,
                deleteFirstCity};
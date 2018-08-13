// const {mongoose} = require('./mongoose');
const {Item} = require('../db.models/item');

// Create
let insertItem = (item) => {
    return item.save();
};

// Read
let getFirstItem = (query) => {
    return Item.findOne(query);
};

let getItems = (query) => {
    return Item.find(query);
};

// Update
let updateFirstItem = (query,updateValues) => {
    return Item.update(query,updateValues);
};

let updateAllItems = (query,updateValues) => {
    return Item.updateMany(query,updateValues);
};

// Delete
let deleteFirstItem = (query) => {
    return Item.findOneAndDelete(query);
};

let deleteAllItems = (query) => {
    return Item.deleteMany(query);
};

module.exports = {insertItem, 
                getFirstItem, 
                getItems, 
                updateFirstItem, 
                updateAllItems,
                deleteAllItems,
                deleteFirstItem};
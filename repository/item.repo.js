const {mongoose} = require('./mongoose');
const {Item} = require('../models/item');

// Insert
let insertItem = (item) => {
    return item.save();
};

// Get
let getFirstItem = (item) => {
    return Item.findOne(item);
};

let getItems = (item) => {
    return Item.find(item);
};

// Update
let updateFirstItem = (query,updateValues) => {
    return Item.update(query,updateValues);
};

let updateAllItems = (query,updateValues) => {
    return Item.updateMany(query,updateValues);
};

// Delete
let deleteAllItems = (query) => {
    return Item.deleteMany(query);
};

let deleteFirstItem = (query) => {
    return Item.delete(query);
};

module.exports = {insertItem, 
                getFirstItem, 
                getItems, 
                updateFirstItem, 
                updateAllItems,
                deleteAllItems,
                deleteFirstItem};
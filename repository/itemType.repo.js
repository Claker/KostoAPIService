const {ItemType} = require('../db.models/itemType');
// const {mongoose} = require('./mongoose');

// Insert
let insertItemType = (itemType) => 
{
    return itemType.save();
};

// Get
let getFirstItemType = (itemType) => 
{
    return ItemType.findOne(itemType);
};

let getItemTypes = (itemType) => 
{
    return ItemType.find(itemType);
};

// Update
let updateFirstItemType = (query,updateValues) => {
    return ItemType.update(query,updateValues);
};

let updateAllItemTypes = (query,updateValues) => {
    return ItemType.updateMany(query,updateValues);
};

// Delete
let deleteAllItemTypes = (query) => {
    return ItemType.deleteMany(query);
};

let deleteFirstItemType = (query) => {
    return ItemType.delete(query);
};

module.exports = {insertItemType, 
                getFirstItemType, 
                getItemTypes, 
                updateFirstItemType, 
                updateAllItemTypes,
                deleteFirstItemType,
                deleteAllItemTypes};
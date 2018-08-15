const {ItemType} = require('../db.models/itemType');

// Create
let insertItemType = (itemType) => 
{
    return itemType.save();
};

// Read
let getFirstItemType = (query) => 
{
    return ItemType.findOne(query);
};

let getAllItemTypes = (query) => 
{
    return ItemType.find(query);
};

// Update
let updateFirstItemType = (query,updateValues) => {
    return ItemType.update(query,updateValues);
};

let updateAllItemTypes = (query,updateValues) => {
    return ItemType.updateMany(query,updateValues);
};

// Delete
let deleteFirstItemType = (query) => {
    return ItemType.findOneAndDelete(query);
};

let deleteAllItemTypes = (query) => {
    return ItemType.deleteMany(query);
};

module.exports = {insertItemType, 
                getFirstItemType, 
                getAllItemTypes, 
                updateFirstItemType, 
                updateAllItemTypes,
                deleteFirstItemType,
                deleteAllItemTypes};
const {ItemType} = require('../db.models/itemType');

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

let getAllItemTypes = (itemType) => 
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
    return ItemType.findOneAndDelete(query);
};

module.exports = {insertItemType, 
                getFirstItemType, 
                getAllItemTypes, 
                updateFirstItemType, 
                updateAllItemTypes,
                deleteFirstItemType,
                deleteAllItemTypes};
const {Item} = require('../db.models/item');
const {ItemType} = require('../db.models/itemType');

// Create
let insertItem = (item) => 
{
    return item.save();
};

// Read
let getFirstItem = (query) => 
{
    return Item.findOne(query);
};

let getAllItems = (query) => {
    return Item.find(query);
};

let getItemsByItemType = (query) => {
    return ItemType.findOne(query).populate(Item.modelName.toLowerCase()+'s').exec();
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
                getAllItems, 
                getItemsByItemType,
                updateFirstItem, 
                updateAllItems,
                deleteAllItems,
                deleteFirstItem};
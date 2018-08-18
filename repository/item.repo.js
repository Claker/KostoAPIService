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

let getItems = (query) => 
{
    return Item.find(query);
};

let getAllItems = () => 
{
    return Item.find({});
};

let getItemsByItemType = (query) => 
{
    return ItemType.findOne(query).populate(Item.modelName.toLowerCase()+'s').exec();
};

// Update
let updateFirstItem = (query,updateValues) => {
    return Item.update(query,updateValues);
};

let updateItems = (query,updateValues) => {
    return Item.updateMany(query,updateValues);
};

let updateAllItems = (updateValues) => {
    return Item.updateMany({},updateValues);
};

// Delete
let deleteFirstItem = (query) => {
    return Item.findOneAndDelete(query);
};

let deleteItems = (query) => {
    return Item.deleteMany(query);
};

let deleteAllItems = () => {
    return Item.deleteMany({});
};

module.exports = {insertItem, 
                getFirstItem, 
                getItems,
                getAllItems, 
                getItemsByItemType,
                updateFirstItem, 
                updateItems,
                updateAllItems,
                deleteItems,
                deleteAllItems,
                deleteFirstItem};
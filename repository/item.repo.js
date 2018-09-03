const {Item} = require('../db_models/item');
const {ItemType} = require('../db_models/itemType');
const constants = require('../constants').Models;

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
    return ItemType.findOne(query).populate(constants.Item.ItemVirtualsName).exec();
};

// Update
let updateFirstItem = (query,updateValues) => 
{
    return Item.update(query,updateValues);
};

let updateItems = (query,updateValues) => 
{
    return Item.updateMany(query,updateValues);
};

let updateAllItems = (updateValues) => 
{
    return Item.updateMany({},updateValues);
};

// Delete
let deleteFirstItem = (query) => 
{
    return Item.findOneAndDelete(query);
};

let deleteItems = (query) => 
{
    return Item.deleteMany(query);
};

let deleteAllItems = () => 
{
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
                deleteFirstItem,
                deleteItems,
                deleteAllItems,
                };
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

let getItemTypes = (query) => 
{
    return ItemType.find(query);
};

let getAllItemTypes = () => 
{
    return ItemType.find({});
};

// Update
let updateFirstItemType = (query,updateValues) => {
    return ItemType.update(query,updateValues);
};

let updateItemTypes = (query,updateValues) => 
{
    return ItemType.updateMany(query,updateValues);
};

let updateAllItemTypes = (updateValues) => 
{
    return ItemType.updateMany({},updateValues);
};

// Delete
let deleteFirstItemType = (query) => 
{
    return ItemType.findOneAndDelete(query);
};

let deleteItemTypes = (query) => 
{
    return ItemType.deleteMany(query);
};

let deleteAllItemTypes = () => 
{
    return ItemType.deleteMany({});
};

module.exports = {insertItemType, 
                getFirstItemType,
                getItemTypes,  
                getAllItemTypes, 
                updateFirstItemType, 
                updateItemTypes,
                updateAllItemTypes,
                deleteFirstItemType,
                deleteItemTypes,
                deleteAllItemTypes};
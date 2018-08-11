const {ItemType} = require('../models/itemType');
const {mongoose} = require('./mongoose');

let insertItemType = (itemType) => 
{
    return itemType.save();
};

let getItemType = (itemType) => 
{
    return ItemType.findOne(itemType);
};

module.exports = {insertItemType, getItemType};
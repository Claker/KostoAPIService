const {mongoose} = require('./mongoose');
const {Item} = require('../models/item');

let insertItem = (item) => {
    return item.save();
};

let getItem = (item) => {
    return Item.findOne(item);
};

module.exports = {insertItem,getItem};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Item} = require('./item');

// define schema
const ItemTypeSchema = new Schema({
    name : { type : String, required : [ true, 'Item Type name is required.' ] }
});

ItemTypeSchema.virtual('items', {
    ref: Item.modelName,
    localField: '_id', // Find items where `localField`
    foreignField: 'itemType', // is equal to `foreignField`
});

// create model
let ItemType = mongoose.model('ItemType',ItemTypeSchema);

// export
module.exports = {ItemType};
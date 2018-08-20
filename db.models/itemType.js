const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Item, ItemModelName, ItemVirtualsName} = require('./item');
const ItemTypeModelName = 'ItemType'; // for bidirectional dependency because of declaring virtuals

// define schema
const ItemTypeSchema = new Schema({
    name : { type : String, required : [ true, 'Item Type name is required.' ] }
});

ItemTypeSchema.virtual('items', {
    ref: 'Item',
    localField: '_id', // Find items where `localField`
    foreignField: 'itemType', // is equal to `foreignField`
});

// create model
let ItemType = mongoose.model(ItemTypeModelName,ItemTypeSchema);

// export
module.exports = {ItemType, ItemTypeModelName};
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Models} = require('../../constants');

// define schema
const ItemTypeSchema = new Schema({
    name : { type : String, required : [ true, 'Item Type name is required.' ] }
});

ItemTypeSchema.virtual(Models.Item.ItemVirtualsName , {
    ref: Models.Item.ItemModelName,
    localField: '_id', // Find items where `localField`
    foreignField: 'itemType', // is equal to `foreignField`
});

// create model
let ItemType = mongoose.model(Models.ItemType.ItemTypeModelName, ItemTypeSchema);

// export
module.exports = {
    ItemType,
};
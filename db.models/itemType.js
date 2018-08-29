let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ItemModelName, ItemVirtualsName} = require('./item');
const ItemTypeModelName = 'ItemType'; // for bidirectional dependency because of declaring virtuals

let InjectMongoose = (mongooseOther) => { mongoose = mongooseOther };

// define schema
const ItemTypeSchema = new Schema({
    name : { type : String, required : [ true, 'Item Type name is required.' ] }
});

ItemTypeSchema.virtual(ItemVirtualsName, {
    ref: ItemModelName,
    localField: '_id', // Find items where `localField`
    foreignField: 'itemType', // is equal to `foreignField`
});

// create model
let ItemType = mongoose.model(ItemTypeModelName,ItemTypeSchema);

// export
module.exports = {ItemType, ItemTypeModelName, InjectMongoose};
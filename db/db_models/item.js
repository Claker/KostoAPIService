let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../../constants').Models;

let InjectMongoose = (mongooseOther) => mongoose = mongooseOther;

// define schema
const ItemSchema = new Schema({
    name: { type : String, 
            required : [ true, 'Item Name is required.'] },
    itemType: { type : mongoose.Schema.Types.ObjectId, ref: constants.ItemType.ItemTypeModelName ,
                required : [ true, 'Item Type is required.'] },
    isDefaultItem: { type: Boolean, 
                     required : [true, 'Is Default Item is required.'],
                        default: false },
});

ItemSchema.virtual(constants.Cost.CostVirtualsName, {
        ref: constants.Cost.CostModelName,
        localField: '_id', // Find items where `localField`
        foreignField: 'item', // is equal to `foreignField`
});

// create model
let Item = mongoose.model(constants.Item.ItemModelName, ItemSchema);

// export
module.exports = {
        Item,
};
let mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;
const Schema = mongoose.Schema;
const constants = require('../constants').Models;

let InjectMongoose = (mongooseOther) => { mongoose = mongooseOther };

// define schema
const CostSchema = new Schema({
        cost: { type : SchemaTypes.Double, 
            required : [ true, 'Cost is required.'] },
        item: { type : mongoose.Schema.Types.ObjectId, ref: constants.Item.ItemModelName, 
                required : [ true, 'Item is required.'] },
        city: { type: mongoose.Schema.Types.ObjectId, ref: constants.City.CityModelName, 
                     required : [true, 'City is required.'] },
        currency: { type: mongoose.Schema.Types.ObjectId, ref: constants.Currency.CurrencyModelName, 
                        required : [true, 'Currency is required.'] },
});

// create model
let Cost = mongoose.model(constants.Cost.CostModelName, CostSchema);

// export
module.exports = {
                Cost, 
                InjectMongoose, 
                };
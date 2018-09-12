let mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;
const Schema = mongoose.Schema;
const {Models} = require('../../constants');

// define schema
const CostSchema = new Schema({
        cost: { type : SchemaTypes.Double, 
            required : [ true, 'Cost is required.'] },
        item: { type : mongoose.Schema.Types.ObjectId, ref: Models.Item.ItemModelName, 
                required : [ true, 'Item is required.'] },
        city: { type: mongoose.Schema.Types.ObjectId, ref: Models.City.CityModelName, 
                     required : [true, 'City is required.'] },
        currency: { type: mongoose.Schema.Types.ObjectId, ref: Models.Currency.CurrencyModelName, 
                        required : [true, 'Currency is required.'] },
});

// create model
let Cost = mongoose.model(Models.Cost.CostModelName, CostSchema);

// export
module.exports = {
        Cost, 
};
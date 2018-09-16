const mongoose = require('../repository/mongoose');
const {KostoItemsTemplate} = require('../db/dataTemplate/kostoTemplate');
const _ = require('lodash');


async function TransformDbDataToView(city)
{
    let result = new Object();

    result.city = city.name;
    result.country = city.country.name;
    result.currency = city.currency.sign;

    let items = Object.values(KostoItemsTemplate);

    // peformance looks to be O(n^2) but it actually is O(n)
    result.costs = city.costs.map(e=>{

        let item = items.find((i) => i._id.toString() === e.item.toString());

        if(item)
        {
            _.remove(items,(e) => e === item); // performance-wise, delete the found item
            return { itemName:item.name, cost:e.cost+result.currency };
        }
    });

    return result;
}

module.exports={
    TransformDbDataToView,
};
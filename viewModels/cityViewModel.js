const mongoose = require('../repository/mongoose');
const {KostoItemsTemplate} = require('../db/dataTemplate/kostoTemplate');
const _ = require('lodash');


async function TransformDbDataToView(city)
{
    let result = new Object();

    result.city = city.name;
    result.country = city.country.name;
    result.currency = city.currency.sign;
    result.costs = [];

    let propsArray = Object.values(KostoItemsTemplate);

    city.costs.forEach(e=>{
        for (let item of propsArray)
        {
            if(item._id === e.item.toString())
            {
                result.costs.push({itemName:item.name,cost:e.cost+result.currency});
                _.remove(propsArray,(e) => e === item);
                break;
            }
        }
    });

    return result;
}

module.exports={
    TransformDbDataToView
}
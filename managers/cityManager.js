const mongoose = require('../repository/mongoose');
const costRepo = require('../repository/cost.repo');
const countryRepo = require('../repository/country.repo');
const itemRepo = require('../repository/item.repo');
const itemTypeRepo = require('../repository/itemType.repo');
const currencyRepo = require('../repository/currency.repo');
const cityRepo = require('../repository/city.repo');
const stringSimilarity = require('string-similarity');
const {Expat} = require('../constants');

async function FindCityInDB(cityName)
{
    let city = await costRepo.getFirstCityWithCosts({name:cityName});

    if(!city)
    {
        city = await searchSimilarCity(cityName);

        if(city) 
        {
            console.log(`City found in DB by similarity : ${city.name} with id ${city._id}`);
            city = await costRepo.getFirstCityWithCosts({name:city.name});
        }
    }
    // TODO: remove this for final version
    else{console.log(`City found in DB by name : ${city.name} with id ${city._id}`);}

    return city;
} 

async function InsertDataFromWeb(data)
{
    let savedCountry = await countryRepo.insertCountry({name:data.country});
    let savedCurrency = await currencyRepo.insertCurrency({sign:data.currency});
    let savedCity = await cityRepo.insertCity({name:data.city,country:savedCountry.id,currency:savedCurrency.id});

    let items = await itemRepo.getAllItems();

    let cost1 = costRepo.insertCost({cost:data.basicLunchMenu,item:items.find(f => f.name === Expat.BasicLunchMenu)._id,
    city:savedCity._id, currency:savedCurrency._id});
    let cost2 = costRepo.insertCost({cost:data.fastFood,item:items.find(f=>f.name===Expat.FastFood)._id,
        city:savedCity._id, currency:savedCurrency._id});
}

async function searchSimilarCity(cityName)
{
    cities = await cityRepo.getAllCities();
    let city;

    cities.some((e)=>
    {
        let similarity = stringSimilarity.compareTwoStrings(cityName,e.name);

        if(similarity>0.5){
            city=e; 
            return true;
        }
    });

    return city;
}

module.exports = {
    FindCityInDB, InsertDataFromWeb
}
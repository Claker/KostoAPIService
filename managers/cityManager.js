const mongoose = require('../repository/mongoose');
const costRepo = require('../repository/cost.repo');
const countryRepo = require('../repository/country.repo');
const currencyRepo = require('../repository/currency.repo');
const cityRepo = require('../repository/city.repo');
const stringSimilarity = require('string-similarity');
const {KostoItemsTemplate} = require('../db/dataTemplate/kostoTemplate');

async function FindCityInDB(cityName)
{
    let city = await costRepo.getFirstCityWithCosts({name:cityName});

    if(!city)
        city = await getCityBySimilarity(cityName);
    else
        console.log(`City found in DB by name : ${city.name} with id ${city._id}`);

    return city;
} 

async function getCityBySimilarity(cityName)
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

    if(city) 
    {
        console.log(`City found in DB by similarity : ${city.name} with id ${city._id}`);
        city = await costRepo.getFirstCityWithCosts({name:city.name});
    }

    return city;
}

async function InsertDataFromWebInDB(data)
{
    let country = await countryRepo.getFirstCountry({name:data.country});
    if(!country)
        country = await countryRepo.insertCountry({name:data.country});
    
    let currency = await currencyRepo.getFirstCurrency({sign:data.currency});
    if(!currency)
        currency = await currencyRepo.insertCurrency({sign:data.currency});
    
    let city = await cityRepo.insertCity({name:data.city,country:country.id,currency:currency.id});

    costRepo.insertCost({cost:data.lunchMenuInMidRangeRestaurant,item:KostoItemsTemplate.LunchMenuInMidRangeRestaurant._id,
    city:city._id, currency:currency._id});
    
    costRepo.insertCost({cost:data.fastFoodComboMeal,item:KostoItemsTemplate.FastFoodComboMeal._id,
        city:city._id, currency:currency._id});
}

module.exports = {
    FindCityInDB, 
    InsertDataFromWebInDB,
}
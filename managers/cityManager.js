const mongoose = require('../repository/mongoose');
const costRepo = require('../repository/cost.repo');
const cityRepo = require('../repository/city.repo');
const stringSimilarity = require('string-similarity');

async function FindCityInDB(cityName)
{
    let city = await costRepo.getFirstCityWithCosts({name:cityName});

    if(!city)
    {
        city = await searchSimilarCity(cityName);

        // TODO: remove this for final version
        if(city) {console.log(`City found in DB by similarity : ${city.name} with id ${city._id}`);}
    }
    // TODO: remove this for final version
    else{console.log(`City found in DB by name : ${city.name} with id ${city._id}`);}

    return city;
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
    FindCityInDB,
}
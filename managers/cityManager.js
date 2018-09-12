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
        city = getCityBySimilarity(cityName);
    else
        console.log(`City found in DB by name : ${city.name} with id ${city._id}`);

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
    
    let city = await cityRepo.getFirstCity({name:data.city});
    if(!city)
        city = await cityRepo.insertCity({name:data.city,country:country.id,currency:currency.id});

    insertCosts(data, currency, city);
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

function insertCosts(data, currency, city)
{
    costRepo.insertCost({cost:data.lunchMenuInMidRangeRestaurant,item:KostoItemsTemplate.LunchMenuInMidRangeRestaurant._id,
        city:city._id, currency:currency._id});
    
    costRepo.insertCost({cost:data.fastFoodComboMeal,item:KostoItemsTemplate.FastFoodComboMeal._id,
        city:city._id, currency:currency._id});

    // costRepo.insertCost({cost:data.beer500mlRestaurant,item:KostoItemsTemplate.Beer500mlRestaurant._id,
    //     city:city._id, currency:currency._id});

    costRepo.insertCost({cost:data.beer500mlSupermarket,item:KostoItemsTemplate.Beer500mlSupermarket._id,
        city:city._id, currency:currency._id});

    // costRepo.insertCost({cost:data.cappuccinoInRestaurant,item:KostoItemsTemplate.CappuccinoInRestaurant._id,
    //     city:city._id, currency:currency._id});
    
    costRepo.insertCost({cost:data.milk1LInSupermarket,item:KostoItemsTemplate.Milk1LInSupermarket._id,
        city:city._id, currency:currency._id});
        
    costRepo.insertCost({cost:data.bread500mgInSupermarket,item:KostoItemsTemplate.Bread500mgInSupermarket._id,
        city:city._id, currency:currency._id});

    costRepo.insertCost({cost:data.eggs12InSupermarket,item:KostoItemsTemplate.Eggs12InSupermarket._id,
        city:city._id, currency:currency._id});
        
    costRepo.insertCost({cost:data.apples1kgInSupermarket,item:KostoItemsTemplate.Apples1kgInSupermarket._id,
        city:city._id, currency:currency._id});
    
    costRepo.insertCost({cost:data.tomato1kg,item:KostoItemsTemplate.Tomato1kg._id,
        city:city._id, currency:currency._id});

    costRepo.insertCost({cost:data.potatos1kg,item:KostoItemsTemplate.Potatos1kg._id,
        city:city._id, currency:currency._id});

    costRepo.insertCost({cost:data.wineRedMidRangeQuality,item:KostoItemsTemplate.WineRedMidRangeQuality._id,
        city:city._id, currency:currency._id});

    costRepo.insertCost({cost:data.localCheese500gInSupermarket,item:KostoItemsTemplate.LocalCheese500gInSupermarket._id,
        city:city._id, currency:currency._id});

    costRepo.insertCost({cost:data.chicken500gInSupermarket,item:KostoItemsTemplate.Chicken500gInSupermarket._id,
        city:city._id, currency:currency._id});

    // costRepo.insertCost({cost:data.cigarettes20Marlboro,item:KostoItemsTemplate.Cigarettes20Marlboro._id,
    //     city:city._id, currency:currency._id});
            
    // costRepo.insertCost({cost:data.monthlyLocalTransport,item:KostoItemsTemplate.MonthlyLocalTransport._id,
    //     city:city._id, currency:currency._id});

    // costRepo.insertCost({cost:data.gasoline1L,item:KostoItemsTemplate.Gasoline1L._id,
    //     city:city._id, currency:currency._id});

    // costRepo.insertCost({cost:data.taxi8Km,item:KostoItemsTemplate.Taxi8Km._id,
    //     city:city._id, currency:currency._id});

        
    // costRepo.insertCost({cost:data.dinnerAtPubFor2,item:KostoItemsTemplate.DinnerAtPubFor2._id,
    //     city:city._id, currency:currency._id});

    costRepo.insertCost({cost:data.cocaCola2L,item:KostoItemsTemplate.CocaCola2L._id,
        city:city._id, currency:currency._id});

    // costRepo.insertCost({cost:data.cinema2Tickets,item:KostoItemsTemplate.Cinema2Tickets._id,
    //     city:city._id, currency:currency._id});

        
    // costRepo.insertCost({cost:data.theater2TicketsBestSeats,item:KostoItemsTemplate.Theater2TicketsBestSeats._id,
    //     city:city._id, currency:currency._id});

    // costRepo.insertCost({cost:data.dinnerFor2AtExpensiveRestaurant3CoursesAndDrink,item:KostoItemsTemplate.DinnerFor2AtExpensiveRestaurant3CoursesAndDrink._id,
    //     city:city._id, currency:currency._id});

    // costRepo.insertCost({cost:data.cocktailInPub,item:KostoItemsTemplate.CocktailInPub._id,
    //     city:city._id, currency:currency._id});
}

module.exports = {
    FindCityInDB, 
    InsertDataFromWebInDB,
}
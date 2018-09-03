const mongoose = require('../repository/mongoose');

const countryRepo = require('../repository/country.repo');
const country = require('../db_models/country');
const Country = country.Country;

const currencyRepo = require('../repository/currency.repo');
const currency = require('../db_models/currency');
const Currency = currency.Currency;

const cityRepo = require('../repository/city.repo');
const city = require('../db_models/city');
const City = city.City;

const itemTypeRepo = require('../repository/itemType.repo');
const itemType = require('../db_models/itemType');
const ItemType = itemType.ItemType;

const itemRepo = require('../repository/item.repo');
const item = require('../db_models/item');
const Item = item.Item;

const costRepo = require('../repository/cost.repo');
const cost = require('../db_models/cost');
const Cost = cost.Cost;

let idToTest1 = '53cb6b9b4f4ddef1ad47f973';
let idToTest2 = '53cb6b9b4f4ddef1ad47f974';
let idToTest3 = '53cb6b9b4f4ddef1ad47f975';
let idToTest4 = '53cb6b9b4f4ddef1ad47f976';
let idToTest5 = '53cb6b9b4f4ddef1ad47f977';
let idToTest6 = '53cb6b9b4f4ddef1ad47f978';
let idToTest7 = '53cb6b9b4f4ddef1ad47f979';
let idToTest8 = '53cb6b9b4f4ddef1ad47f980';
let idToTest9 = '53cb6b9b4f4ddef1ad47f981';
let idToTest10 = '53cb6b9b4f4ddef1ad47f982';
let idToTest11 = '53cb6b9b4f4ddef1ad47f983';
let idToTest12 = '53cb6b9b4f4ddef1ad47f984';
let idToTest13 = '53cb6b9b4f4ddef1ad47f985';
let idToTest14 = '53cb6b9b4f4ddef1ad47f986';
let idToTest15 = '53cb6b9b4f4ddef1ad47f987';
let idToTest16 = '53cb6b9b4f4ddef1ad47f988';
let idToTest17 = '53cb6b9b4f4ddef1ad47f989';
let idToTest18 = '53cb6b9b4f4ddef1ad47f990';
let idToTest19 = '53cb6b9b4f4ddef1ad47f991';
let idToTest20 = '53cb6b9b4f4ddef1ad47f992';
let idToTest21 = '53cb6b9b4f4ddef1ad47f993';

let country1 = new Country({_id:idToTest1, name:'Romania'});
let country2 = new Country({_id:idToTest2, name:'New Zealand'});

let currency1 = new Currency({_id:idToTest3, name:'Romanian RON', shortName:'RON', sign:'RON'});
let currency2 = new Currency({_id:idToTest4, name:'New Zealand Dollar', shortName:'NZD', sign:'NZ$'});

let city1 = new City({_id:idToTest5, name:'Timisoara', country:idToTest1, currency: idToTest3});
let city2 = new City({_id:idToTest6, name:'Deva', country:idToTest1, currency: idToTest3});
let city3 = new City({_id:idToTest7, name:'Auckland', country:idToTest2, currency: idToTest4});

let itemType1 = new ItemType({_id:idToTest8, name:'ItemTypeTest1'});
let itemType2 = new ItemType({_id:idToTest9, name:'ItemTypeTest1'});

let item1 = new Item({_id:idToTest10, name:'ItemTest1',itemType:idToTest8});
let item2 = new Item({_id:idToTest11, name:'ItemTest1',itemType:idToTest8});
let item3 = new Item({_id:idToTest12, name:'ItemTest3',itemType:idToTest9});

let cost1 = new Cost({_id:idToTest13, cost:10.2, item:idToTest10, city:idToTest5, currency: idToTest3});
let cost2 = new Cost({_id:idToTest14, cost:3.3, item:idToTest10, city:idToTest5, currency: idToTest3});
let cost3 = new Cost({_id:idToTest15, cost:4.3, item:idToTest10, city:idToTest5, currency: idToTest3});
let cost4 = new Cost({_id:idToTest16, cost:5.4, item:idToTest10, city:idToTest6, currency: idToTest3});
let cost5 = new Cost({_id:idToTest17, cost:6.5, item:idToTest10, city:idToTest6, currency: idToTest3});
let cost6 = new Cost({_id:idToTest18, cost:7.6, item:idToTest11, city:idToTest6, currency: idToTest3});
let cost7 = new Cost({_id:idToTest19, cost:8.7, item:idToTest11, city:idToTest6, currency: idToTest3});
let cost8 = new Cost({_id:idToTest20, cost:9.8, item:idToTest12, city:idToTest7, currency: idToTest4});
let cost9 = new Cost({_id:idToTest21, cost:1.2, item:idToTest12, city:idToTest7, currency: idToTest4});

(async () => {

    let country1Res = await countryRepo.insertCountry(country1);
    let country2Res = await countryRepo.insertCountry(country2);
    let currency1Res = await currencyRepo.insertCurrency(currency1);
    let currency2Res = await currencyRepo.insertCurrency(currency2);
    let city1Res = await cityRepo.insertCity(city1);
    let city2Res = await cityRepo.insertCity(city2);
    let city3Res = await cityRepo.insertCity(city3);
    let itemType1Res = await itemTypeRepo.insertItemType(itemType1);
    let itemType2Res = await itemTypeRepo.insertItemType(itemType2);
    let item1Res = await itemRepo.insertItem(item1);
    let item2Res = await itemRepo.insertItem(item2);
    let item3Res = await itemRepo.insertItem(item3);
    let cost1Res = await costRepo.insertCost(cost1);
    let cost2Res = await costRepo.insertCost(cost2);
    let cost3Res = await costRepo.insertCost(cost3);
    let cost4Res = await costRepo.insertCost(cost4);
    let cost5Res = await costRepo.insertCost(cost5);
    let cost6Res = await costRepo.insertCost(cost6);
    let cost7Res = await costRepo.insertCost(cost7);
    let cost8Res = await costRepo.insertCost(cost8);
    let cost9Res = await costRepo.insertCost(cost9);

})().then((res)=> {} ,(err)=> console.log(`Error encountered: ${err}`));
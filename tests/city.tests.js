const expect = require('expect');
const mongoose = require('../repository/mongoose');

const cityRepo = require('../repository/city.repo');
const {City} = require('../db.models/city');

const countryRepo = require('../repository/country.repo');
const {Country} = require('../db.models/country');

const currencyRepo = require('../repository/currency.repo');
const {Currency} = require('../db.models/currency');
// +40 724 150 053 - buni
// +40 731 754 460 - tata
describe('Test City CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f966';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f967';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f968';
    let idToTest4 = '53cb6b9b4f4ddef1ad47f969';
    let idToTest5 = '53cb6b9b4f4ddef1ad47f970';
    let idToTest6 = '53cb6b9b4f4ddef1ad47f971';
    let idToTest7 = '53cb6b9b4f4ddef1ad47f972';

    let country1 = new Country({_id:idToTest1, name:'Romania'});
    let country2 = new Country({_id:idToTest2, name:'New Zealand'});
    let currency1 = new Currency({_id:idToTest3, name:'Romanian RON', shortName:'RON', sign:'RON'});
    let currency2 = new Currency({_id:idToTest4, name:'New Zealand Dollar', shortName:'NZD', sign:'NZ$'});
    let city1 = new City({_id:idToTest5, name:'Timisoara', country:idToTest1, currency: idToTest3});
    let city2 = new City({_id:idToTest6, name:'Deva', country:idToTest1, currency: idToTest3});
    let city3 = new City({_id:idToTest7, name:'Auckland', country:idToTest2, currency: idToTest4});


    it('should insert cities', (done)=>{
        (async () => {

            let country1Res = await countryRepo.insertCountry(country1);
            expect(country1Res._id.toString()).toBe(idToTest1);

            let country2Res = await countryRepo.insertCountry(country2);
            expect(country2Res._id.toString()).toBe(idToTest2);

            let currency1Res = await currencyRepo.insertCurrency(currency1);
            expect(currency1Res._id.toString()).toBe(idToTest3);

            let currency2Res = await currencyRepo.insertCurrency(currency2);
            expect(currency2Res._id.toString()).toBe(idToTest4);

            let city1Res = await cityRepo.insertCity(city1);
            expect(city1Res._id.toString()).toBe(idToTest5);

            let city2Res = await cityRepo.insertCity(city2);
            expect(city2Res._id.toString()).toBe(idToTest6);

            let city3Res = await cityRepo.insertCity(city3);
            expect(city3Res._id.toString()).toBe(idToTest7);

        })().then((res)=> done() ,(err)=> done(err) );
    });
    

    it('should get second city',(done)=>{
        cityRepo.getFirstCity({name:'Deva'}).then((city) => {        

                expect(city._id.toString()).toBe(idToTest6);
                done();

            },(err)=> done(err) );
    });


    it('should get second currency with list of cities',(done)=>{

        cityRepo.getCitiesByCurrency({name:'New Zealand Dollar'})
            .then((currency) => {        

                expect(currency.cities.length).toBe(1);
                expect(currency.cities[0]._id.toString()).toBe(idToTest7);       
                done();

            },(err)=> done(err) );
    });


    it('should get first country with list of cities',(done)=>{
        
        cityRepo.getCitiesByCountry({name:'Romania'})
            .then((country) => {        

                expect(country.cities.length).toBe(2);
                expect(country.cities[0]._id.toString()).toBe(idToTest5);
                expect(country.cities[1]._id.toString()).toBe(idToTest6);       
                done();

            },(err)=> done(err) );
    });


    it('should delete city',(done)=>{
        
        cityRepo.deleteFirstCity({name:'Deva'})
            .then((city) => {        

                expect(city._id.toString()).toBe(idToTest6);
                done();

            },(err)=> done(err) );
    });


    it('should get cities',(done)=>{
        
        cityRepo.getCities({name:'Timisoara'})
            .then((cities) => {        

                expect(cities.length).toBe(1);
                expect(cities[0]._id.toString()).toBe(idToTest5);
                done();

            },(err)=> done(err) );
    });


    it('should update first city',(done)=>{
        (async ()=>{
            
            await cityRepo.updateFirstCity({name:'Timisoara'},{name:'Auckland'});
            let cities = await cityRepo.getCities({name:'Auckland'})
            
            expect(cities.length).toBe(2);
            expect(cities[0]._id.toString()).toBe(idToTest5);
            expect(cities[1]._id.toString()).toBe(idToTest7);
            
        })().then((res)=> done(), (err)=> done(err) );
    });


    it('should update all cities',(done)=>{
        (async () => {

            await cityRepo.updateAllCities({name:'Deva'});
            let cities = await cityRepo.getCities({name:'Deva'});

            expect(cities.length).toBe(2);
            expect(cities[0]._id.toString()).toBe(idToTest5);
            expect(cities[1]._id.toString()).toBe(idToTest7);

        })().then((res)=> done(), (err) => done(err) );
    });


    it('should delete all cities, countries and currencies',(done)=>{
        (async ()=>{
        
            let deletedCurrencies = await currencyRepo.deleteAllCurrencies();
            expect(deletedCurrencies.ok).toBe(1);
            expect(deletedCurrencies.n).toBe(2);

            let deletedCountries = await countryRepo.deleteAllCountries();
            expect(deletedCountries.ok).toBe(1);
            expect(deletedCountries.n).toBe(2);

            let deletedCities = await cityRepo.deleteAllCities();
            expect(deletedCities.ok).toBe(1);
            expect(deletedCities.n).toBe(2);

            let cities = await cityRepo.getAllCities();
            expect(cities.length).toBe(0);

            let countries = await countryRepo.getAllCountries();
            expect(countries.length).toBe(0);
            
            let currencies = await currencyRepo.getAllCurrencies();
            expect(currencies.length).toBe(0);

        })().then((res)=> done(), (err)=> done(err) );
    });
});
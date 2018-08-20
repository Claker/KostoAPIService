const expect = require('expect');
const mongoose = require('../repository/mongoose');

const {Country} = require('../db.models/country');
const countryRepo = require('../repository/country.repo');

describe('Test Country CRUD', () => {

    let idToTest1 = '53cb6b9b4f4ddef1ad47f962';
    let idToTest2 = '53cb6b9b4f4ddef1ad47f963';
    let idToTest3 = '53cb6b9b4f4ddef1ad47f964';
    let idToTest4 = '53cb6b9b4f4ddef1ad47f965';

    let country1 = new Country({_id:idToTest1, name:'America'});
    let country2 = new Country({_id:idToTest2, name:'New Zealand'});
    let country3 = new Country({_id:idToTest3, name:'Romania'});
    let country4 = new Country({_id:idToTest4, name:'Germany'});

    it('should insert countries',(done)=>{
        (async() => {

            let country1Res = await countryRepo.insertCountry(country1);
            expect(country1Res._id.toString()).toBe(idToTest1);

            let country2Res = await countryRepo.insertCountry(country2);
            expect(country2Res._id.toString()).toBe(idToTest2);

            let country3Res = await countryRepo.insertCountry(country3);
            expect(country3Res._id.toString()).toBe(idToTest3);

            let country4Res = await countryRepo.insertCountry(country4);
            expect(country4Res._id.toString()).toBe(idToTest4);

        })().then((res)=> done(), (err)=> done(err) );
    });


    it('should get first country',(done)=>{
        countryRepo.getFirstCountry({_id:idToTest1})
        .then((result)=>{
            expect(result.name).toBe('America');
            expect(result._id.toString()).toBe(idToTest1);
            done();
        },(err)=> done(err) );
    });


    it('should get countries',(done)=>{
        countryRepo.getCountries({$or:[{name:'New Zealand'},{name:'Romania'}]})
        .then((results)=>{
            expect(results.length).toBe(2);
            expect(results[0]._id.toString()).toBe(idToTest2);
            expect(results[1]._id.toString()).toBe(idToTest3);
            done();
        },(err)=>done(err) );
    });


    it('should delete first country and check that 3 remained',(done)=>{
        (async ()=>{

            let deletedCountry = await countryRepo.deleteFirstCountry({name:'New Zealand'});
            expect(deletedCountry._id.toString()).toBe(idToTest2);
            
            let countries = await countryRepo.getCountries({name:'New Zealand'});
            expect(countries.length).toBe(0);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should update first country and check it was updated',(done)=>{
        (async ()=>{
            
            await countryRepo.updateFirstCountry({name:'America'},{name:'Romania'});
            let countries = await countryRepo.getCountries({name:'Romania'});
            expect(countries.length).toBe(2);
            expect(countries[0]._id.toString()).toBe(idToTest1);
            expect(countries[1]._id.toString()).toBe(idToTest3);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should update all countries and check they were updated',(done)=>{
        (async ()=>{
            await countryRepo.updateAllCountries({name:'Romania'});
            let countries = countryRepo.getCountries({name:'Romania'});

            expect(countries.length).toBe(3);
            expect(countries[0]._id.toString()).toBe(idToTest1);
            expect(countries[1]._id.toString()).toBe(idToTest3);
            expect(countries[2]._id.toString()).toBe(idToTest4);

        })().then((res)=>done(),(err)=>done(err));
    });

    it('should delete all countries and check that none remained',(done)=>{
        (async ()=>{

            await countryRepo.deleteCountries({name:'Romania'});
            let countries = await countryRepo.getAllCountries();
            expect(results.length).toBe(0);

        })().then((res)=>done(),(err)=>done(err));
    });
});
const express = require('express')();
const parser = require('./parser');

const spaceRegex = / /g;
const port = process.env.PORT || 3000;
const numbeoCityLink = 'https://www.numbeo.com/cost-of-living/in/';
const expatistanCityLink = 'https://www.expatistan.com/cost-of-living/';

express.get('/getAverageCostOfMilk/:city',(req,res)=>
{
    let city = req.params.city;
    city = city.replace(spaceRegex,'');

    Promise.all(
        [parser.getExpatistanMilkPrice(expatistanCityLink+city)
        ,parser.getNumbeoMilkPrice(numbeoCityLink+city, city)])
    .then(([milkPriceExpatistan,milkPriceNumbeo]) =>  
    { 
        parser.sendPriceResponse(milkPriceExpatistan, milkPriceNumbeo, res);
    });
});

express.listen(port, ()=>{console.log(`Server is up on port ${port};`);});


/// use of Promise.all
    // parser.getExpatistanMilkPrice(expatistanCityLink+city)
    // .then( milkPriceExpatistan => Promise.all([milkPriceExpatistan, parser.getNumbeoMilkPrice(numbeoCityLink+city)]))
    // .then(([milkPriceExpatistan, milkPriceNumbeo])=> Promise.all([
    //     milkPriceExpatistan,
    //     milkPriceNumbeo===''? parser.retryGetNumbeoMilkPrice(city) : milkPriceNumbeo]
    //   ))
    // .then(([milkPriceExpatistan, milkPriceNumbeo]) =>
    // {
    //     parser.sendPriceResponse(milkPriceExpatistan, milkPriceNumbeo, res);
    // });
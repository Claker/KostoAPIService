const express = require('express')();
const parser = require('./parser/parser');
const constExp = require('./parser/constantsExp');

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
        let a = parser.getParsedPrices(milkPriceExpatistan);

        console.log(constExp.BasicLunchMenu, ':'+a.basicLunchMenu);
        console.log(constExp.FastFood,':'+a.fastFood);
        console.log(constExp.Chicken500gr,':'+a.chicken500gr);
        console.log(constExp.Milk1L,':'+a.milk1L);
        console.log(constExp.Eggs12,':'+a.eggs12);
        console.log(constExp.Tomato1kg,':'+a.tomato1kg);
        console.log(constExp.Cheese500gr,':'+a.cheese500gr);
        console.log(constExp.Apples1kg,':'+a.apples1kg);
        console.log(constExp.Potatos1kg,':'+a.potatos1kg);
        console.log(constExp.BeerHalfLInSupermarket,':'+a.beerHalfLInSupermarket);
        console.log(constExp.WineRedGoodQuality,':'+a.wineRedGoodQuality);
        console.log(constExp.CocaCola2L,':'+a.cocaCola2L);
        console.log(constExp.BreadSupermarket,':'+a.breadSupermarket);
        console.log('Currency', a.currency);
        console.log('City', a.city);
        console.log('Country', a.country);

        // res.send(milkPriceExpatistan);

        // parser.sendPriceResponse(milkPriceExpatistan, milkPriceNumbeo, res);
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
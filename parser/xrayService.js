const xray = require('x-ray')();
const expatParser = require('./expatParser');
const {KostoLinks} = require('../constants');

let getExpatistanData = (link) =>
{
    return xray(link,'.blocks');
}

let getNumbeoData = (link,city) =>
{
    return xray(link,'.data_wide_table tr:nth-child(11) td:nth-child(2)')
    .then(res => res ? res : retryGetNumbeoData(city));    
}

// let sendPriceResponse = (price1, price2, response) =>
// {
//     let prices = extractPrices(price1, price2);

//     let price1OK = !(price1==='' || isNaN(prices.price1));
//     let price2OK = !(price2==='' || isNaN(prices.price2));

//     if(price1OK && price2OK)
//         response.send((prices.price1+prices.price2)/2.0+'');
//     else if(price1OK)
//         response.send(prices.price1+'');
//     else if(price2OK)
//         response.send(prices.price2+'');
//     else
//         response.send('City not found');
// }

function getCorrectCityLinkForNumbeo(city)
{
    return xray(`https://www.numbeo.com/cost-of-living/in/${city}`,
            '.innerWidth div:nth-child(5) a@href');
}

// function extractPrices(price1String,price2String)
// {
//     // in case the number has the format like 12,132.12 remove commas
//     price1String = price1String.replace(',','');
//     price2String = price2String.replace(',','');

//     return { price1 : parseFloat(price1String.match(intAndFloatsRegex))
//             ,price2 : parseFloat(price2String.match(intAndFloatsRegex)) }
// }

function retryGetNumbeoData(city) 
{
    return getCorrectCityLinkForNumbeo(city)
            .then(function(correctLink)
            {
                return getNumbeoData(correctLink);
            })
            .catch(function(err)
            {
                return '';
            });
}

let GetInfoFromWeb = (cityName) =>
{
    console.log(`${cityName} - city not found in DB so we get data from websites.`);

    Promise.all(
        [getExpatistanData(KostoLinks.ExpatCityLink+cityName)
        ,getNumbeoData(KostoLinks.NumbeoCityLink+cityName, cityName)])
    .then(([exData,milkPriceNumbeo]) =>  
    { 
        let a = expatParser.GetParsedPrices(exData);

        // res.send(milkPriceExpatistan);

        // parser.sendPriceResponse(milkPriceExpatistan, milkPriceNumbeo, res);
    });
}

module.exports ={
                    GetInfoFromWeb,
                }
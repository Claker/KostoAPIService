const xray = require('x-ray')();
const expatParser = require('./expatParser');
const {KostoLinks} = require('../constants');

async function GetInfoFromWeb(cityName)
{
    console.log(`${cityName} - city not found in DB so we get data from websites.`);
    let responses = await Promise.all(
        [getExpatistanData(KostoLinks.ExpatCityLink+cityName)
        ,getNumbeoData(KostoLinks.NumbeoCityLink+cityName, cityName)]);

    return expatParser.GetParsedPrices(responses[0]);
}

let getExpatistanData = (link) =>
{
    return xray(link,'.blocks');
}

let getNumbeoData = (link,city) =>
{
    return xray(link,'.data_wide_table tr:nth-child(11) td:nth-child(2)')
    .then(res => res ? res : retryGetNumbeoData(city));    
}

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

function getCorrectCityLinkForNumbeo(city)
{
    return xray(`https://www.numbeo.com/cost-of-living/in/${city}`,
            '.innerWidth div:nth-child(5) a@href');
}

module.exports ={
    GetInfoFromWeb,
}
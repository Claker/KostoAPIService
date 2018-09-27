const xray = require('x-ray')();
const expatParser = require('./expatParser');
const {KostoLinks} = require('../constants');

let GetInfoFromWeb = async (cityName) =>
{
    console.log(`${cityName} - city not found in DB so we get data from websites.`);
    let responses = await Promise.all(
        [getExpatistanData(KostoLinks.ExpatCityLink+cityName)
        ,getNumbeoData(KostoLinks.NumbeoCityLink+cityName, cityName)]);

    if(!responses || responses[0])
        return undefined;

    return expatParser.GetParsedPrices(responses[0]);
};

let getExpatistanData = (link) =>
{
    return xray(link,'.blocks');
};

let getNumbeoData = (link,city) =>
{
    return xray(link,'.data_wide_table tr:nth-child(11) td:nth-child(2)')
    .then(res => res ? res : retryGetNumbeoData(city));    
};

let retryGetNumbeoData = (city) => 
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
};

let getCorrectCityLinkForNumbeo = (city) =>
{
    return xray(`https://www.numbeo.com/cost-of-living/in/${city}`,
            '.innerWidth div:nth-child(5) a@href');
};

module.exports ={
    GetInfoFromWeb,
};
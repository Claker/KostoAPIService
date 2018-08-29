const xray = require('x-ray')();
const contsExp = require('./constantsExp');

const intAndFloatsRegex = /[+-]?\d+(\.\d+)?/g;
const currencyRegex = /[^\d]+[^\.\d+]?/g;

let getNumbeoMilkPrice = (link,city) =>
{
    return xray(link,'.data_wide_table tr:nth-child(11) td:nth-child(2)')
    .then(res => res ? res : retryGetNumbeoMilkPrice(city));    
}

let getExpatistanMilkPrice = (link) =>
{
    // return xray(link,
    // '.single-city tbody tr:nth-child(5) td.price')  ;
    // return xray(link, '.single-city tbody');
    // return xray(link,'.prices');
    return xray(link,'.blocks');
}

let sendPriceResponse = (price1, price2, response) =>
{
    let prices = extractPrices(price1, price2);

    let price1OK = !(price1==='' || isNaN(prices.price1));
    let price2OK = !(price2==='' || isNaN(prices.price2));

    if(price1OK && price2OK)
        response.send((prices.price1+prices.price2)/2.0+'');
    else if(price1OK)
        response.send(prices.price1+'');
    else if(price2OK)
        response.send(prices.price2+'');
    else
        response.send('City not found');
}

function getCorrectCityLinkForNumbeo(city)
{
    return xray(`https://www.numbeo.com/cost-of-living/in/${city}`,
            '.innerWidth div:nth-child(5) a@href');
}

function extractPrice(priceString)
{
    // in case the number has the format like 12,132.12 remove commas
    priceString = priceString.replace(',','');
    return parseFloat(priceString.match(intAndFloatsRegex));
}

function extractPrices(price1String,price2String)
{
    // in case the number has the format like 12,132.12 remove commas
    price1String = price1String.replace(',','');
    price2String = price2String.replace(',','');

    return { price1 : parseFloat(price1String.match(intAndFloatsRegex))
            ,price2 : parseFloat(price2String.match(intAndFloatsRegex)) }
}

function retryGetNumbeoMilkPrice(city) 
{
    return getCorrectCityLinkForNumbeo(city)
            .then(function(correctLink)
            {
                return getNumbeoMilkPrice(correctLink);
            })
            .catch(function(err)
            {
                return '';
            });
}

function getParsedPrices(fullText)
{
    let prices = new Object();

    let a0 = fullText.split('Change the currency:')[0].split('Cost of living in')[1].split(',');

    prices.city = a0[0].trim();
    prices.country = a0[1].trim();
    
    let a1 = fullText.split(contsExp.FastFood);
    
    let priceBasicLunch = a1[0].split(contsExp.BasicLunchMenu)[1].trim();

    prices.currency = priceBasicLunch.match(currencyRegex)[0];
    prices.basicLunchMenu = extractPrice(priceBasicLunch);

    let a2 = a1[1].split(contsExp.Chicken500gr);
    prices.fastFood = extractPrice(a2[0].trim());

    let a3 = a2[1].split(contsExp.Milk1L);
    prices.chicken500gr = extractPrice(a3[0].trim());

    let a4 = a3[1].split(contsExp.Eggs12);
    prices.milk1L = extractPrice(a4[0].trim());

    let a5 = a4[1].split(contsExp.Tomato1kg);
    prices.eggs12 = extractPrice(a5[0].trim());

    let a6 = a5[1].split(contsExp.Cheese500gr);
    prices.tomato1kg = extractPrice(a6[0].trim());

    let a7 = a6[1].split(contsExp.Apples1kg);
    prices.cheese500gr = extractPrice(a7[0].trim());

    let a8 = a7[1].split(contsExp.Potatos1kg);
    prices.apples1kg = extractPrice(a8[0].trim());
    
    let a9 = a8[1].split(contsExp.BeerHalfLInSupermarket);
    prices.potatos1kg = extractPrice(a9[0].trim());

    let a10 = a9[1].split(contsExp.WineRedGoodQuality);
    prices.beerHalfLInSupermarket = extractPrice(a10[0].trim());

    let a11 = a10[1].split(contsExp.CocaCola2L);
    prices.wineRedGoodQuality = extractPrice(a11[0].trim());

    let a12 = a11[1].split(contsExp.BreadSupermarket);
    prices.cocaCola2L = extractPrice(a12[0].trim());

    let a13 = a12[1].split('Housing');
    prices.breadSupermarket = extractPrice(a13[0].trim());

    return prices;
}

module.exports = {getNumbeoMilkPrice,
                    sendPriceResponse,
                    getExpatistanMilkPrice,
                    getParsedPrices, }
const {Expat, KostoRegex} = require('../constants');

let GetParsedPrices = (fullText) =>
{
    let prices = new Object();

    let a0 = fullText.split(Expat.ChangeTheCurrency)[0].split(Expat.CostOfLiving)[1].split(',');

    prices.city = a0[0].trim();
    prices.country = a0[1].trim();
    
    let a1 = fullText.split(Expat.FastFood);
    
    let priceBasicLunch = a1[0].split(Expat.BasicLunchMenu)[1].trim();

    prices.currency = priceBasicLunch.match(KostoRegex.CurrencyRegex)[0];
    prices.basicLunchMenu = extractPrice(priceBasicLunch);

    let a2 = a1[1].split(Expat.Chicken500gr);
    prices.fastFood = extractPrice(a2[0].trim());

    let a3 = a2[1].split(Expat.Milk1L);
    prices.chicken500gr = extractPrice(a3[0].trim());

    let a4 = a3[1].split(Expat.Eggs12);
    prices.milk1L = extractPrice(a4[0].trim());

    let a5 = a4[1].split(Expat.Tomato1kg);
    prices.eggs12 = extractPrice(a5[0].trim());

    let a6 = a5[1].split(Expat.Cheese500gr);
    prices.tomato1kg = extractPrice(a6[0].trim());

    let a7 = a6[1].split(Expat.Apples1kg);
    prices.cheese500gr = extractPrice(a7[0].trim());

    let a8 = a7[1].split(Expat.Potatos1kg);
    prices.apples1kg = extractPrice(a8[0].trim());
    
    let a9 = a8[1].split(Expat.BeerHalfLInSupermarket);
    prices.potatos1kg = extractPrice(a9[0].trim());

    let a10 = a9[1].split(Expat.WineRedGoodQuality);
    prices.beerHalfLInSupermarket = extractPrice(a10[0].trim());

    let a11 = a10[1].split(Expat.CocaCola2L);
    prices.wineRedGoodQuality = extractPrice(a11[0].trim());

    let a12 = a11[1].split(Expat.BreadSupermarket);
    prices.cocaCola2L = extractPrice(a12[0].trim());

    let a13 = a12[1].split(Expat.Housing);
    prices.breadSupermarket = extractPrice(a13[0].trim());

    // printPricesToConsole(prices);

    return prices;
};

function extractPrice(priceString)
{
    // in case the number has the format like 12,132.12 remove commas
    priceString = priceString.replace(',','');
    return parseFloat(priceString.match(KostoRegex.IntAndFloatsRegex));
}

function printPricesToConsole(prices)
{
    console.log(Expat.BasicLunchMenu, ':'+prices.basicLunchMenu);
    console.log(Expat.FastFood,':'+prices.fastFood);
    console.log(Expat.Chicken500gr,':'+prices.chicken500gr);
    console.log(Expat.Milk1L,':'+prices.milk1L);
    console.log(Expat.Eggs12,':'+prices.eggs12);
    console.log(Expat.Tomato1kg,':'+prices.tomato1kg);
    console.log(Expat.Cheese500gr,':'+prices.cheese500gr);
    console.log(Expat.Apples1kg,':'+prices.apples1kg);
    console.log(Expat.Potatos1kg,':'+prices.potatos1kg);
    console.log(Expat.BeerHalfLInSupermarket,':'+prices.beerHalfLInSupermarket);
    console.log(Expat.WineRedGoodQuality,':'+prices.wineRedGoodQuality);
    console.log(Expat.CocaCola2L,':'+prices.cocaCola2L);
    console.log(Expat.BreadSupermarket,':'+prices.breadSupermarket);
    console.log(Expat.Currency, prices.currency);
    console.log(Expat.City, prices.city);
    console.log(Expat.Country, prices.country);
}

module.exports={GetParsedPrices};
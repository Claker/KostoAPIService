const {Expat} = require('../constants').Items;
const {KostoRegex} = require('../constants');

let GetParsedPrices = (fullText) =>
{
    let prices = new Object();

    let a0 = fullText.split(Expat.ChangeTheCurrency)[0].split(Expat.CostOfLiving)[1].split(',');

    if(a0.length<=1)
        return undefined;

    prices.city = a0[0].trim();

    if(a0[1].includes(Expat.CollaborativeEffort));
        a0[1] = a0[1].split(Expat.CollaborativeEffort)[0];

    prices.country = a0[1].trim();
    
    let a1 = fullText.split(Expat.FastFoodComboMeal);
    
    let priceBasicLunch = a1[0].split(Expat.LunchMenuInMidRangeRestaurant)[1].trim();

    prices.currency = extractCurrency(priceBasicLunch);
    prices.lunchMenuInMidRangeRestaurant = extractPrice(priceBasicLunch);

    let a2 = a1[1].split(Expat.Chicken500gInSupermarket);
    prices.fastFoodComboMeal = extractPrice(a2[0].trim());

    let a3 = a2[1].split(Expat.Milk1LInSupermarket);
    prices.chicken500gInSupermarket = extractPrice(a3[0].trim());

    let a4 = a3[1].split(Expat.Eggs12InSupermarket);
    prices.milk1LInSupermarket = extractPrice(a4[0].trim());

    let a5 = a4[1].split(Expat.Tomato1kg);
    prices.eggs12InSupermarket = extractPrice(a5[0].trim());

    let a6 = a5[1].split(Expat.LocalCheese500gInSupermarket);
    prices.tomato1kg = extractPrice(a6[0].trim());

    let a7 = a6[1].split(Expat.Apples1kgInSupermarket);
    prices.localCheese500gInSupermarket = extractPrice(a7[0].trim());

    let a8 = a7[1].split(Expat.Potatos1kg);
    prices.apples1kgInSupermarket = extractPrice(a8[0].trim());
    
    let a9 = a8[1].split(Expat.Beer500mlSupermarket);
    prices.potatos1kg = extractPrice(a9[0].trim());

    let a10 = a9[1].split(Expat.WineRedMidRangeQuality);
    prices.beer500mlSupermarket = extractPrice(a10[0].trim());

    let a11 = a10[1].split(Expat.CocaCola2L);
    prices.wineRedMidRangeQuality = extractPrice(a11[0].trim());

    let a12 = a11[1].split(Expat.Bread500mgInSupermarket);
    prices.cocaCola2L = extractPrice(a12[0].trim());

    let a13 = a12[1].split(Expat.Housing);
    prices.bread500mgInSupermarket = extractPrice(a13[0].trim());

    return prices;
};

let extractPrice = (priceString) =>
{
    // in case the number has the format like 12,132.12 remove commas
    priceString = priceString.replace(',','');
    return parseFloat(priceString.match(KostoRegex.IntAndFloatsRegex));
};

let extractCurrency = (currencyString) =>
{
    // in case the number has the format like 12,132.12 or 12,321 remove commas
    currencyString = currencyString.replace(',','');
    return currencyString.match(KostoRegex.CurrencyRegex)[0];
};

let printPricesToConsole = (prices) =>
{
    console.log(Expat.LunchMenuInMidRangeRestaurant, ':'+prices.lunchMenuInMidRangeRestaurant);
    console.log(Expat.FastFoodComboMeal,':'+prices.fastFoodComboMeal);
    console.log(Expat.Chicken500gInSupermarket,':'+prices.chicken500gInSupermarket);
    console.log(Expat.Milk1LInSupermarket,':'+prices.milk1LInSupermarket);
    console.log(Expat.Eggs12InSupermarket,':'+prices.eggs12InSupermarket);
    console.log(Expat.Tomato1kg,':'+prices.tomato1kg);
    console.log(Expat.LocalCheese500gInSupermarket,':'+prices.localCheese500gInSupermarket);
    console.log(Expat.Apples1kgInSupermarket,':'+prices.apples1kgInSupermarket);
    console.log(Expat.Potatos1kg,':'+prices.potatos1kg);
    console.log(Expat.BeerHalfLInSupermarket,':'+prices.beerHalfLInSupermarket);
    console.log(Expat.WineRedMidRangeQuality,':'+prices.wineRedMidRangeQuality);
    console.log(Expat.CocaCola2L,':'+prices.cocaCola2L);
    console.log(Expat.Bread500mgInSupermarket,':'+prices.bread500mgInSupermarket);
    console.log(Expat.Currency, prices.currency);
    console.log(Expat.City, prices.city);
    console.log(Expat.Country, prices.country);
};

module.exports={
    GetParsedPrices,
};
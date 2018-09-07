let Port = process.env.PORT || 3000;

let KostoRegex = {
    IntAndFloatsRegex : /[+-]?\d+(\.\d+)?/g,
    CurrencyRegex : /[^\d]+[^\.\d+]?/g,
}

let KostoLinks = {
    NumbeoCityLink : 'https://www.numbeo.com/cost-of-living/in/',
    ExpatCityLink : 'https://www.expatistan.com/cost-of-living/',
};

let ItemTypes = {
    Travel : 'Travel',
    Food : 'Food',
    Entertainment : 'Entertainment', 
}

// for bidirectional dependency because of declaring virtuals
let Models = {
    Item : { ItemModelName : 'Item', ItemVirtualsName : 'items' },
    ItemType : { ItemTypeModelName : 'ItemType' },
    City : { CityModelName : 'City', CityVirtualsName : 'cities' },
    Cost : { CostModelName : 'Cost', CostVirtualsName : 'costs' },
    Country : { CountryModelName : 'Country' },
    Currency : { CurrencyModelName : 'Currency' }, 
}

let Expat = 
{
    FastFood : 'Combo meal in fast food restaurant (Big Mac Meal or similar)',
    BasicLunchMenu : 'Basic lunchtime menu (including a drink) in the business district',
    Chicken500gr : '500 gr (1 lb.) of boneless chicken breast',
    Milk1L : '1 liter (1 qt.) of whole fat milk',
    Eggs12 : '12 eggs, large',
    Tomato1kg : '1 kg (2 lb.) of tomatoes',
    Cheese500gr : '500 gr (16 oz.) of local cheese',
    Apples1kg : '1 kg (2 lb.) of apples',
    Potatos1kg : '1 kg (2 lb.) of potatoes',
    BeerHalfLInSupermarket : '0.5 l (16 oz) domestic beer in the supermarket',
    WineRedGoodQuality : '1 bottle of red table wine, good quality',
    CocaCola2L : '2 liters of Coca-Cola',
    BreadSupermarket : 'Bread for 2 people for 1 day',   
    Housing : 'Housing',
    ChangeTheCurrency : 'Change the currency:',
    CostOfLiving : 'Cost of living in',
    Currency : 'Currency',
    City : 'City',
    Country : 'Country',
}

module.exports = {Expat, KostoRegex, KostoLinks, Port, Models, ItemTypes}
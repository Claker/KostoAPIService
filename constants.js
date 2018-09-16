let Port = process.env.PORT || 3000;

//mongodb://heroku_3zndz79h:rslgth8mkfr5s1a3ku30oo1m15@ds119702.mlab.com:19702/heroku_3zndz79h
let MongoDB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/Kosto';

let KostoRegex = {
    IntAndFloatsRegex : /[+-]?\d+(\.\d+)?/g,
    CurrencyRegex : /[^\d]+[^\.\d+]?/g,
};

let KostoLinks = {
    NumbeoCityLink : 'https://www.numbeo.com/cost-of-living/in/',
    ExpatCityLink : 'https://www.expatistan.com/cost-of-living/',
};

// for bidirectional dependency because of declaring virtuals
let Models = {
    Item : { ItemModelName : 'Item', ItemVirtualsName : 'items' },
    ItemType : { ItemTypeModelName : 'ItemType' },
    City : { CityModelName : 'City', CityVirtualsName : 'cities' },
    Cost : { CostModelName : 'Cost', CostVirtualsName : 'costs' },
    Country : { CountryModelName : 'Country' },
    Currency : { CurrencyModelName : 'Currency' }, 
};

let Items = {
    Expat :
    {
        LunchMenuInMidRangeRestaurant : 'Basic lunchtime menu (including a drink) in the business district',
        FastFoodComboMeal : 'Combo meal in fast food restaurant (Big Mac Meal or similar)',
        Beer500mlRestaurant : '1 beer in neighbourhood pub (500ml or 1pt.)',
        Beer500mlSupermarket : '0.5 l (16 oz) domestic beer in the supermarket',
        CappuccinoInRestaurant : 'Cappuccino in expat area of the city',
        Milk1LInSupermarket : '1 liter (1 qt.) of whole fat milk',
        Bread500mgInSupermarket : 'Bread for 2 people for 1 day',
        Eggs12InSupermarket : '12 eggs, large',
        Apples1kgInSupermarket : '1 kg (2 lb.) of apples',
        Tomato1kg : '1 kg (2 lb.) of tomatoes',
        Potatos1kg : '1 kg (2 lb.) of potatoes',
        WineRedMidRangeQuality : '1 bottle of red table wine, good quality',

        Cigarettes20Marlboro : '1 package of Marlboro cigarettes',

        MonthlyLocalTransport:'Monthly ticket public transport',
        Gasoline1L : '1 liter (1/4 gallon) of gas',

        // expat specific only
        DinnerAtPubFor2 : 'Basic dinner out for two in neighborhood pub',
        LocalCheese500gInSupermarket : '500 gr (16 oz.) of local cheese',
        Chicken500gInSupermarket : '500 gr (1 lb.) of boneless chicken breast',
        CocaCola2L : '2 liters of Coca-Cola',

        Taxi8Km : 'Taxi trip on a business day, basic tariff, 8 km. (5 miles)',

        Cinema2Tickets : '2 tickets to the movies',
        Theater2TicketsBestSeats : '2 tickets to the theater (best available seats)',
        DinnerFor2AtExpensiveRestaurant3CoursesAndDrink: 'Dinner for two at an Italian restaurant in the expat area including appetisers, main course, wine and dessert',
        CocktailInPub : '1 cocktail drink in downtown club',

        Housing : 'Housing',
        CollaborativeEffort : 'Expatistan is a collaborative effort',
        ChangeTheCurrency : 'Change the currency:',
        CostOfLiving : 'Cost of living in',
        Currency : 'Currency',
        City : 'City',
        Country : 'Country',
    },
    Numbeo :
    {
        LunchMenuInMidRangeRestaurant : 'Meal, Inexpensive Restaurant',
        FastFoodComboMeal : 'McMeal at McDonalds (or Equivalent Combo Meal)',
        Beer500mlRestaurant : 'Domestic Beer (0.5 liter draught)',
        Beer500mlSupermarket : 'Domestic Beer (0.5 liter bottle)',
        CappuccinoInRestaurant : 'Cappuccino (regular)',
        Milk1LInSupermarket : 'Milk (regular), (1 liter)',
        Bread500mgInSupermarket : 'Loaf of Fresh White Bread (500g)',
        Eggs12InSupermarket : 'Eggs (regular) (12)',
        Apples1kgInSupermarket : 'Apples (1kg)',
        Tomato1Kg : 'Tomato (1kg)',
        Potatos1kg : 'Potato (1kg)',
        WineRedMidRangeQuality : 'Bottle of Wine (Mid-Range)',
        Cigarettes20Marlboro : 'Cigarettes 20 Pack (Marlboro)',

        MonthlyLocalTransport:'Monthly Pass (Regular Price)',
        Gasoline1L : 'Gasoline (1 liter)',

        // numbeo specific only
        ImportedBeer330mlInRestaurant : 'Imported Beer (0.33 liter bottle)',
        ImportedBeer330mlInSupermarket : 'Imported Beer (0.33 liter bottle)',
        CokeInRestaurant : 'Coke/Pepsi (0.33 liter bottle)',
        MealFor2MidRangeRestaurant3Courses : 'Meal for 2 People, Mid-range Restaurant, Three-course',
        WaterInRestaurant : 'Water (0.33 liter bottle)',
        Rice1Kg : 'Rice (white), (1kg)',
        LocalCheese1Kg : 'Local Cheese (1kg)',
        Chicken1KgInSupermarket : 'Chicken Breasts (Boneless, Skinless), (1kg)',
        BeefOrRedMeat1kgInSupermarket : 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)',
        Banana1KgInSupermarket : 'Banana (1kg)',
        Oranges1KgInSupermarket : 'Oranges (1kg)',
        Onion1KgInSupermarket : 'Onion (1kg)',
        LetuceInSupermarket : 'Lettuce (1 head)',
        Water1500mlInSupermarket: 'Water (1.5 liter bottle)',

        LocalTransport : 'One-way Ticket (Local Transport)',
        TaxiStartTariff : 'Taxi Start (Normal Tariff)',
        Taxi1Km : 'Taxi 1km (Normal Tariff)',
        Taxi1HourWaiting : 'Taxi 1hour Waiting (Normal Tariff)',

        Cinema1TicketAtMovieRelease : 'Cinema, International Release, 1 Seat',

        ChangeTheCurrency : 'Change the currency:',
        CostOfLiving : 'Cost of living in',
        Currency : 'Currency',
        City : 'City',
        Country : 'Country',
    },
};
module.exports = {
    Items, 
    KostoRegex, 
    KostoLinks, 
    Port, 
    Models,
    MongoDB_URL,
};
let 
id1 = '53cb6b9b4f4ddef1ad47f901', id2 = '53cb6b9b4f4ddef1ad47f902', id3 = '53cb6b9b4f4ddef1ad47f903', 
id4 = '53cb6b9b4f4ddef1ad47f904', id5 = '53cb6b9b4f4ddef1ad47f905', id6 = '53cb6b9b4f4ddef1ad47f906',
id7 = '53cb6b9b4f4ddef1ad47f907', id8 = '53cb6b9b4f4ddef1ad47f908', id9 = '53cb6b9b4f4ddef1ad47f909', 
id10 = '53cb6b9b4f4ddef1ad47f910', id11 = '53cb6b9b4f4ddef1ad47f911', id12 = '53cb6b9b4f4ddef1ad47f912',
id13 = '53cb6b9b4f4ddef1ad47f913', id14 = '53cb6b9b4f4ddef1ad47f914', id15 = '53cb6b9b4f4ddef1ad47f915', 
id16 = '53cb6b9b4f4ddef1ad47f916', id17 = '53cb6b9b4f4ddef1ad47f917', id18 = '53cb6b9b4f4ddef1ad47f918',
id19 = '53cb6b9b4f4ddef1ad47f919', id20 = '53cb6b9b4f4ddef1ad47f920', id21 = '53cb6b9b4f4ddef1ad47f921', 
id22 = '53cb6b9b4f4ddef1ad47f922', id23 = '53cb6b9b4f4ddef1ad47f923', id24 = '53cb6b9b4f4ddef1ad47f924',
id25 = '53cb6b9b4f4ddef1ad47f925', id26 = '53cb6b9b4f4ddef1ad47f926', id27 = '53cb6b9b4f4ddef1ad47f927', 
id28 = '53cb6b9b4f4ddef1ad47f928', id29 = '53cb6b9b4f4ddef1ad47f929', id30 = '53cb6b9b4f4ddef1ad47f930',
id31 = '53cb6b9b4f4ddef1ad47f931', id32 = '53cb6b9b4f4ddef1ad47f932', id33 = '53cb6b9b4f4ddef1ad47f933', 
id34 = '53cb6b9b4f4ddef1ad47f934', id35 = '53cb6b9b4f4ddef1ad47f935', id36 = '53cb6b9b4f4ddef1ad47f936',
id37 = '53cb6b9b4f4ddef1ad47f937', id38 = '53cb6b9b4f4ddef1ad47f938', id39 = '53cb6b9b4f4ddef1ad47f939', 
id40 = '53cb6b9b4f4ddef1ad47f940', id41 = '53cb6b9b4f4ddef1ad47f941', id42 = '53cb6b9b4f4ddef1ad47f942',
id43 = '53cb6b9b4f4ddef1ad47f943', id44 = '53cb6b9b4f4ddef1ad47f944', id45 = '53cb6b9b4f4ddef1ad47f945', 
id46 = '53cb6b9b4f4ddef1ad47f946', id47 = '53cb6b9b4f4ddef1ad47f947', id48 = '53cb6b9b4f4ddef1ad47f948',
id49 = '53cb6b9b4f4ddef1ad47f949';

let KostoItemTypesTemplate = 
{
    Travel : { name : 'Travel', _id : id1 },
    Food : { name : 'Food', _id : id2 },
    Entertainment : { name : 'Entertainment', _id : id3 }, 
}

let KostoItemsTemplate =
{
    // food
    LunchMenuInMidRangeRestaurant : { name : 'Lunch menu in mid-range restaurant', _id : id4, itemType : KostoItemTypesTemplate.Food._id },
    FastFoodComboMeal : { name : 'Fast food (Combo Meal)', _id : id5, itemType : KostoItemTypesTemplate.Food._id },
    Beer500mlRestaurant : { name : 'Beer in restaurant (500ml)', _id : id6, itemType : KostoItemTypesTemplate.Food._id },
    Beer500mlSupermarket : { name : 'Beer in supermarket (500ml)', _id : id7, itemType : KostoItemTypesTemplate.Food._id },
    CappuccinoInRestaurant : { name : 'Cappuccino in restaurant', _id : id8, itemType : KostoItemTypesTemplate.Food._id },
    Milk1LInSupermarket : { name : '1L milk in supermarket', _id : id9, itemType : KostoItemTypesTemplate.Food._id },
    Bread500mgInSupermarket : { name : 'Bread in supermarket (500g)', _id : id10, itemType : KostoItemTypesTemplate.Food._id },
    Eggs12InSupermarket : { name : '12 Eggs in supermarket', _id : id11, itemType : KostoItemTypesTemplate.Food._id },
    Apples1kgInSupermarket : { name : 'Apples (1kg)', _id : id14, itemType : KostoItemTypesTemplate.Food._id },
    Tomato1kg : { name : '1 kg (2 lb.) of tomatoes', _id : id15, itemType : KostoItemTypesTemplate.Food._id },
    Potatos1kg : { name : 'Potato (1kg)', _id : id16, itemType : KostoItemTypesTemplate.Food._id },
    WineRedMidRangeQuality : { name : 'Bottle of Wine (Mid-Range)', _id : id17, itemType : KostoItemTypesTemplate.Food._id },
    LocalCheese500gInSupermarket : { name : 'Local cheese (500g) in supermarket', _id : id12, itemType : KostoItemTypesTemplate.Food._id },
    Chicken500gInSupermarket : { name : 'Chicken 500gr in supermarket', _id : id13, itemType : KostoItemTypesTemplate.Food._id },

    // entertainment
    Cigarettes20Marlboro : { name : 'Cigarettes 20 Pack (Marlboro)', _id : id18, itemType : KostoItemTypesTemplate.Entertainment._id },

    // travel
    MonthlyLocalTransport: { name : 'Local Transport Monthly Pass', _id : id19, itemType : KostoItemTypesTemplate.Travel._id },
    Gasoline1L : { name : 'Gasoline (1 liter)', _id : id21, itemType : KostoItemTypesTemplate.Travel._id },
    Taxi8Km : { name : 'Taxi 8Km', _id : id20, itemType : KostoItemTypesTemplate.Travel._id },

    // expat specific only
    DinnerAtPubFor2 : { name : 'Basic dinner out for two in neighborhood pub', _id : id22, itemType : KostoItemTypesTemplate.Food._id },
    CocaCola2L : { name : '2 liters of Coca-Cola', _id : id25, itemType : KostoItemTypesTemplate.Food._id },
    Cinema2Tickets : { name : '2 tickets to the movies', _id : id27, itemType : KostoItemTypesTemplate.Entertainment._id },
    Theater2TicketsBestSeats : { name : '2 tickets to the theater (best available seats)', _id : id28, itemType : KostoItemTypesTemplate.Entertainment._id },
    DinnerFor2AtExpensiveRestaurant3CoursesAndDrink: { name : 'Dinner for two at an Italian restaurant in the expat area including appetisers, main course, wine and dessert', _id : id29, itemType : KostoItemTypesTemplate.Food._id },
    CocktailInPub : { name : '1 cocktail in downtown club', _id : id30, itemType : KostoItemTypesTemplate.Food._id },

    // numbeo specific only
    ImportedBeer330mlInRestaurant : { name : 'Imported Beer (0.33 liter bottle)', _id : id31, itemType : KostoItemTypesTemplate.Food._id },
    ImportedBeer330mlInSupermarket : { name : 'Imported Beer (0.33 liter bottle)', _id : id32, itemType : KostoItemTypesTemplate.Food._id },
    CokeInRestaurant : { name : 'Coke/Pepsi (0.33 liter bottle)', _id : id33, itemType : KostoItemTypesTemplate.Food._id },
    MealFor2MidRangeRestaurant3Courses : { name : 'Meal for 2 People, Mid-range Restaurant, Three-course', _id : id34, itemType : KostoItemTypesTemplate.Food._id },
    WaterInRestaurant : { name : 'Water (0.33 liter bottle)', _id : id35, itemType : KostoItemTypesTemplate.Food._id },
    Rice1Kg : { name : 'Rice (white), (1kg)', _id : id36, itemType : KostoItemTypesTemplate.Food._id },
    LocalCheese1Kg : { name : 'Local Cheese (1kg)', _id : id37, itemType : KostoItemTypesTemplate.Food._id },
    Chicken1KgInSupermarket : { name : 'Chicken Breasts (Boneless, Skinless), (1kg)', _id : id38, itemType : KostoItemTypesTemplate.Food._id },
    BeefOrRedMeat1kgInSupermarket : { name : 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)', _id : id39, itemType : KostoItemTypesTemplate.Food._id },
    Banana1KgInSupermarket : { name : 'Banana (1kg)', _id : id40, itemType : KostoItemTypesTemplate.Food._id },
    Oranges1KgInSupermarket : { name : 'Oranges (1kg)', _id : id41, itemType : KostoItemTypesTemplate.Food._id },
    Onion1KgInSupermarket : { name : 'Onion (1kg)', _id : id42, itemType : KostoItemTypesTemplate.Food._id },
    LetuceInSupermarket : { name : 'Lettuce (1 head)', _id : id43, itemType : KostoItemTypesTemplate.Food._id },
    Water1500mlInSupermarket: { name : 'Water (1.5 liter bottle)', _id : id44, itemType : KostoItemTypesTemplate.Food._id },
    LocalTransport : { name : 'One-way Ticket (Local Transport)', _id : id45, itemType : KostoItemTypesTemplate.Travel._id },
    TaxiStartTariff : { name : 'Taxi Start (Normal Tariff)', _id : id46, itemType : KostoItemTypesTemplate.Travel._id },
    Taxi1Km : { name : 'Taxi 1km (Normal Tariff)', _id : id47, itemType : KostoItemTypesTemplate.Travel._id },
    Taxi1HourWaiting : { name : 'Taxi 1hour Waiting (Normal Tariff)', _id : id48, itemType : KostoItemTypesTemplate.Travel._id },
    Cinema1TicketAtMovieRelease : { name : 'Cinema, International Release, 1 Seat', _id : id49, itemType : KostoItemTypesTemplate.Entertainment._id },
}

module.exports = {
    KostoItemsTemplate, 
    KostoItemTypesTemplate,
};
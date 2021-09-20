var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

function pizzaOven(style, sauce, cheese, toppings) {
    var pizza ={}
    pizza.style = style;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish","traditional","mozzarella",["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"] ,["mushroom", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven(["deep dish" ,"traditional","mozzarella",["pepperoni, sausage","bacon","mushroom", "olives", "onions","banana peppers", "jalapenos"]);
console.log(p3);

var p4 = pizzaOven("hand tossed","traditional","mozzarella",["basil, sausage"]);
console.log(p4);

function randomPizzas() {
    var pizza ={}
    style = ["deep dish", "hand tossed","thin","stuffed-crust"];
    sauce = ["traditional","marinara","garlic parm","BBQ","Buffalo"];
    cheese = ["mozzarella", "feta","cheddar"];
    toppings = ["pepperoni, sausage","bacon","mushroom", "olives", "onions","banana peppers", "jalapenos","meatball","ham","pineapple","tomatoes"];
    var pizzastyle = Math.ceil(Math.random()* 4-1);
    var pizzasauce = Math.ceil(Math.random()* 5-1);
    var pizzacheese = Math.ceil(Math.random()* 3-1);
    var pizzatoppings = Math.ceil(Math.random()* 12-1);
    console.log("Your random pizza is:" + style[pizzastyle], sauce[pizzasauce], cheese[pizzacheese], toppings[pizzatoppings])
}
randomPizzas()

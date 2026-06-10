//11
let coffee = "Bumble"; //Espresso, Latte, Bumble
let cupSize = "medium";

let price = 0;
let recipe = "";
let coffeeName = "";

if (cupSize === "small") {
    price = 6;
} else if (cupSize === "medium") {
    price = 9;
} else if (cupSize === "large") {
    price = 12;
}

if (coffee === "Espresso") {
    coffeeName = "Espresso";
    recipe = "Ground coffee + hot water";
} 

else if (coffee === "Latte") {
    coffeeName = "Latte";
    recipe = "Ground coffee + milk";
}

else if (coffee === "Bumble") {
    coffeeName = "Bumble";
    recipe = "Ground coffee + ice + orange juice"
}

console.log("Заказ: " + coffeeName + " (" + cupSize + ")");
console.log("Рецепт: " + recipe);
console.log("Цена: " + price + " руб.");

//12
let age = 18;
let isMember = false;
let eventsVisited = 6;
let access;

if (age < 18) {
    access = "denied";
} else if (isMember) {
    access = "granted";
} else if (eventsVisited < 3 && !(isMember)) {
    access = "denied";
} else if (!(isMember) && eventsVisited > 5) {
    access = "VIP";
} else if (!(isMember) && eventsVisited > 3) {
    access = "granted";
}

console.log(access);
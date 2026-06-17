//5
{const greet = (name) => "Hello, " + name + "!";

console.log(greet("John"));
}

//6
{
function calculate(a, b, operator) {
    return operator(a, b);
}
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(5, 3, add));
console.log(calculate(6, 7, subtract));
console.log(calculate(2, -2, multiply));
console.log(calculate(42, 5, divide));
}

//7
{
function getGreetings() {
    let arr = ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
    return arr;
}
console.log(getGreetings())
}

{
let getGreetings = function() {
    let arr = ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
    return arr;
}
console.log(getGreetings());
}

{
let getGreetings = () => ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
console.log(getGreetings());
}

//8
{
const distanceInMeters = [2, 5, 13, 44, 100];
//используем map чтобы применить указанную функцию к каждому элементу массива
const distanceInFeet = distanceInMeters.map(function(i) {
     return Math.round(i * 3.28084);
});

console.log(distanceInFeet);
}

//9 (new 11)
{
function price(cupSize) {
    if (cupSize === "small") return 6 + " руб.";
    else if (cupSize === "medium") return 9 + " руб.";
    else if (cupSize === "large") return 12 + " руб.";
}

function recipe(coffee) {
    if (coffee === "Espresso") return "Ground coffee + hot water";
    else if (coffee === "Latte") return "Ground coffee + milk";
    else if (coffee === "Bumble") return "Ground coffee + ice + orange juice";
}

let coffeeName = (coffee) => `${coffee}`;
let cup = (cupSize) => `${cupSize}`;

console.log("Заказ: " + coffeeName("Bumble") + " (" + cup("large") + ")");
console.log("Рецепт: " + recipe("Bumble"));
console.log("Цена: " + price("large"));
}

//10
{
function snailClimb(wallHeight, dayClimb, nightSlide) {
    
    function dailyProgress(currentHeight) {
        return currentHeight + dayClimb;
    }
    
    function nightlySlide(currentHeight) {
        return currentHeight - nightSlide;
    }
    
    function reachedTop(height) {
        return height >= wallHeight;
    }
    
    let currentHeight = 0;
    let days = 0;
    
    while (!reachedTop(currentHeight)) {
        days++;
        currentHeight = dailyProgress(currentHeight);
        
        if (reachedTop(currentHeight)) {
            break;
        }
        
        currentHeight = nightlySlide(currentHeight);
    }
    
    return days;
}

let days = snailClimb(5, 3, 2);
console.log(`${days} дня/дней.`); 
}

//11
{
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
        sum += arr[i];
        }
    }
    return sum;
}
console.log(sum([12, 10, 3, -7]));
console.log(sum(["jjj", 12, "hgj;", "5", 5]));
}

//12
{
function moreThanFive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(moreThanFive(["jkhkkklj", "jgjhfdg", "nn", "jhfhgxhfx", "po"]));
console.log(moreThanFive(["how", "are", "you"]));
}

{
function moreThanFive(arr) {
    return arr.filter(word => word.length > 5);
}

console.log(moreThanFive(["jkhkkklj", "jgjhfdg", "nn", "jhfhgxhfx", "po"]));
console.log(moreThanFive(["how", "are", "you"]));
}
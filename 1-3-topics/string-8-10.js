//8
let year = 2026;
let isLeapYear;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}

if (isLeapYear) console.log(year + " високосный");
else console.log(year + " не високосный");

//9
let age = 65;
let isStudent = false;
let basePrice = 10;
let discount = 0;
let finalPrice = basePrice;

if (age < 2) {
    discount = 100;
    finalPrice = 0;
} else if (age < 10) {
    discount = 50;
    finalPrice = basePrice * 0.5;
} else if (age > 65) {
    discount = 15;
    finalPrice = basePrice * 0.85;
} else if (isStudent) {
    discount = 10;
    finalPrice = basePrice * 0.9;
}

console.log(`Скидка: ${discount}%`);
console.log(`Итоговая цена: ${finalPrice} рублей.`);

//10
let wallHeight = 5;
let day = 3;
let night = 2;
let currentHeight = 0;
let days = 0;

days++;
currentHeight = currentHeight + day;
if (currentHeight < wallHeight) {
    currentHeight = currentHeight - night;
}

days++;
currentHeight = currentHeight + day;
if (currentHeight < wallHeight) {
    currentHeight = currentHeight - night;
}

days++;
currentHeight = currentHeight + day;

console.log(days + " дня");
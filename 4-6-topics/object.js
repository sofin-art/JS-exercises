//1
{
const cars = [
    {
        name: "Outback",
        brand: "Subaru",
        year: 2026,
        color: "red"
    },
    {
        name: "Wrangler",
        brand: "Jeep",
        year: 2026,
        color: "white"
    },
    {
        name: "Sportage",
        brand: "KIA",
        year: 2024,
        color: "grey"
    },
    {
        name: "Rogue",
        brand: "Nissan",
        year: 2025,
        color: "beige"
    }
];
}

//2
{
const room = {
    height: 3,
    tv: "samsung",
    big: true
};

console.log(room);
console.log(typeof room.big);
console.log(room.tv.length);
console.log(room.tv.length - 1);
room.tv = room.tv.toUpperCase();
console.log(room.tv);
room.tv = "LG";
console.log(room.tv);

room.furniture = ["table", "chair", "sofa"];

console.log(room.furniture[1]);

delete room.big;
console.log(room);

}

//3
{
function message(animal) {
    return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`;
}

console.log(message({name: "dog", legs: 4, color: "yellow"}));
}

//4 и 5 в гугл документе

//6
{ 
var developers = [
     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
     { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
     { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
     { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
     { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
     { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
     { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
 ];

const hasJs = developers.some(dev => dev.language === 'Javascript');
console.log(hasJs);
}

//7
{
const desserts = [
        { name: "Пирожное", price: 65 },
        { name: "Мороженое", price: 35 },
        { name: "Торт Наполеон", price: 250 },
        { name: "Песочное Печенье", price: 50 },
        { name: "Пудинг", price: 80 },
        { name: "Фруктовый Тарт", price: 40 },
        { name: "Желе Земляничное", price: 40 },
        { name: "Вафли Шоколадные", price: 36 },
        { name: "Булочка с Изюмом", price: 28 }
    ];

const sortedDesserts = [...desserts].sort((a, b) => a.price - b.price);
console.log(sortedDesserts[0]);

const sortDesserts = [...desserts].sort((a, b) => b.price - a.price);
console.log(sortDesserts[0]);
}

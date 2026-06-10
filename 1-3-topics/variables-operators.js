//1

let firstName;
let lastName;

firstName = 'John';
lastName = 'Adams';

console.log(firstName, lastName);

firstName = 'Brandon';
lastName = 'Smith';

console.log(firstName, lastName);

//2
{
let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + "1";
let x = "a" / 6;

console.log(typeof a);
console.log(typeof c);
console.log(typeof str);
console.log(typeof b);
console.log(typeof y);
console.log(typeof x);
}
/*3
const нельзя переопределить, поэтому её лучше всего использовать для тех значений, 
которые изменяться не будут. 
например, дни рождения, какие-то математические константы и др*/

const BIRTHDAY = '21.06.2000';
const pi = 3.14;

//4
let numbers = [0, 9, 10, 11, 19, 20, 21];
for (let number of numbers) {
    console.log(number, number >= 10 && number <= 20);
}

//a 20 мы присвоили числовое значение к number, result использует эту переменную
//и выполняет простую математическую операцию
{const number = 15;
const result = number + 5;
console.log(result);}

//b 282 если хотя бы один операнд — строка, 
// то + выполняет склеивание строк, а не сложение чисел.
{const number2 = "28";
const result = number2 + 2;
console.log(result);}

//c оператор || (логическое ИЛИ) 
// возвращает первое истинное (truthy) значение, 
// которое встречает при вычислении слева направо
{console.log( null || 2 || undefined ); }

//d оператор && (И)
{const x = 5;
const y = 10;

console.log(x > 0 && y < 20); //оба условия верны - true
console.log(x < 0 && y > 0); //одно из условий неверно - false
console.log(x < 0 && y < 0); //оба условия неверны - false
console.log(x > 0 && "Hello"); //если оба значения истинны, && возвращает 
                               //последнее значение - "Hello"
}
//e 
{const a = 0;
const b = "World";

console.log(a > 0 || b.length > 0); //true - одно из значений верное
console.log(a > 0 || b.length === 0); //false - оба значения ложные
console.log(a > 0 || ""); //"" - возвращает единственное верное значение
console.log(a < 0 || "Hello"); //"Hello" - единственное верное значение
}
//f ничего не выведет, так как нет console.log
let x = 5;
let y = 10;
let z = 15;
let result = (x > y || y < z) && !(z === x);

//console.log(result); выведет true, 
//так как одно из условий || y<z true
//и !(false) тоже true

//6 boolean (потому что значение isAdult true)
let age = 18;
let isAdult = age >= 18;
let typeOfIsAdult = typeof isAdult;
console.log(typeOfIsAdult);
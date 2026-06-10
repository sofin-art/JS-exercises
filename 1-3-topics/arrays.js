//1 
const testerPositions = [
    "Quality Assurance Engineer",
    "Software Tester",
    "Test Automation Engineer",
    "Quality Analyst",
    "QA Tester",
    "Test Engineer",
    "Quality Control Analyst",
];

testerPositions.push("SDET", "Lead SDET");
console.log(testerPositions);

//2
const arrr = [1, 2, 3, "a", "b", "c"]
arrr.at()
arrr.push() //изменяет
arrr.unshift() //изменяет
arrr.pop() //изменяет
arrr.shift() //изменяет
arrr.join()
arrr.indexOf()
arrr.lastIndexOf()
arrr.includes()
arrr.flat()
arrr.concat()
arrr.reverse() //изменяет
arrr.slice()
arrr.splice() //изменяет
arrr.copyWithin() //изменяет

//3
const arr = ['a', 'b', 'c', 'da', 'e', 'a'];
console.log(arr.toString());
console.log(arr.at());
arr.push('b');
console.log(arr);
arr.unshift(42);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.join('.'));
console.log(arr.indexOf('a'));
console.log(arr.lastIndexOf('a'));
console.log(arr.includes('o'));
console.log(arr.flat());
console.log(arr.concat(['ba', 'ca']));
console.log(arr.reverse());
console.log(arr.slice(0, 3));
arr.splice(3, 1, 'd');
console.log(arr);
arr.copyWithin(4, 1);
console.log(arr);
console.log(arr.find(item => item == 'da'));
console.log(arr.findIndex(item => item == 'a'));
arr.forEach(item => console.log(item));
console.log(arr.map(item => item + 'a'));
console.log(arr.reduce((sum, current) => sum + current));
console.log(arr.filter(item => typeof item == 'string'));

//4
const arr1 = [ '(', ')', '(', ')', ')'];
const arr2 = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'];
const arr3 = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')'];
let countOpen = 0;
let countClose = 0;
let countOpen1 = 0;
let countClose1 = 0;

const openCount1 = arr1.filter(item => item === '(').length;
const closeCount1 = arr1.filter(item => item === ')').length;

console.log(openCount1 === closeCount1);

const openCount2 = arr2.filter(item => item === '(').length;
const closeCount2 = arr2.filter(item => item === ')').length;
const open2 = arr2.filter(item => item === '{').length;
const closed2 = arr2.filter(item => item === '}').length;

console.log(openCount2 === closeCount2 && open2 === closed2);

const openCount3 = arr3.filter(item => item === '(').length;
const closeCount3 = arr3.filter(item => item === ')').length;
const open3 = arr3.filter(item => item === '{').length;
const closed3 = arr3.filter(item => item === '}').length;

console.log(openCount3 === closeCount3 && open3 === closed3);
//через цикл
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] === '(') {
        countOpen++;
    }
    else if (arr2[i] === ')') {
        countClose++;
    }
    else if (arr2[i] === '{') {
        countOpen1++;
    }
    else if (arr2[i] === '}') {
        countClose1++;
    }
}

console.log(countOpen === countClose && countOpen1 === countClose1)

//5
let num = [4, 81, 3, -12, 99, 14];
console.log(Math.min(...num));

//6
let num1 = [4, 81, 3, -12, 99, 14];
const max = num1.sort((a, b) => b - a) [0];
console.log(max);

//7
let array = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
let arrayF = array.flat();
const sum = arrayF.reduce((sum, current) => sum + current, 0);
console.log(sum);

//8
for (let x = 2; x <= 10; x++) {
    if (x % 2 == 0) {
        console.log(x);
    }
}

//9
let wallHeight = 5;
let day = 3;
let night = 2;
let currentHeight = 0;
let days;

for (days = 1; currentHeight < wallHeight; days++) {
    currentHeight = currentHeight + day;
    
    if (currentHeight >= wallHeight) {
        break;
    }
    
    currentHeight = currentHeight - night;
}

console.log(days + " дня");

//10

let h = 2

    for (let i = -h; i <= h; i++) {
        let line = ''
        for (let j = -h; j <= h; j++) {
            if (Math.abs(i) + Math.abs(j) <= h) {
                line += '*'
            } else {
                line += ' '
            }
        }
        console.log(line)
    }

//11
let height = 5;

for (let i = 0; i < height; i++) {
    let stars = 2 * i + 1;
    let line = '';
    
    for (let j = 0; j < stars; j++) {
        line += '*';
    }
    console.log(line);
};

//12

for (let i = 10; i >= 1; i--) {
    let numbers = [];
    for (let j = 0; j < i; j++) {
        numbers.push(j);
    }
    console.log(numbers.join(' '));
}

//13
let height1 = 10;

for (let i = 0; i < height1; i++) {
    let line = '';
    let numbersCount = height1 - i;
    let spaces = i;
    
    for (let s = 0; s < spaces; s++) {
        line += '  ';
    }
    
    for (let j = 0; j < numbersCount; j++) {
        line += j;
        if (j < numbersCount - 1) {
            line += ' ';
        }
    }
    console.log(line);
}

///14
const numbers = [1, 2, 3, 4, 5];
    let sum1 = 0;

    for (let i = 0; i < numbers.length; i++) { //проходимся по числам до тех пор, 
                                               // пока i будет < длины массива (6)
        if (i % 2 !== 0) { // в счёт попадают только чётные числа
            sum1 += numbers[i]; //2+4 = 6
        }
    }
    console.log(sum1); //6

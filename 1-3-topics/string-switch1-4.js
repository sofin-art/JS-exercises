//1
const s = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";

console.log(s.charAt()); //K
console.log(s.charAt(s.length -1)); //.
console.log(s.substring(1, 4)); //now
console.log(s.substr(1, 3)); //now
console.log(s.slice(-3)); //rk.
console.log(s.indexOf('l')); //4
console.log(s.lastIndexOf('l')); //16
console.log(s.split('of')); //['Knowledge ', ' built-in JavaScript methods speeds up a tester’s work.']
console.log(s.replace('l', 'L')); //KnowLedge of built-in JavaScript methods speeds up a tester’s work.
console.log(s.replaceAll('l', 'L')); //KnowLedge of buiLt-in JavaScript methods speeds up a tester’s work.
console.log(s.toUpperCase()); //KNOWLEDGE OF BUILT-IN JAVASCRIPT METHODS SPEEDS UP A TESTER’S WORK.
console.log(s.toLowerCase()); //knowledge of built-in javascript methods speeds up a tester’s work.
//Все методы строк возвращают новую строку, не меняя оригинал.


//2
const str = "Hello, my name is John";
console.log(str.at());
console.log(str.charAt(5));
console.log(str.charCodeAt());
console.log(str.concat(". Nice to meet you."));
console.log(str.includes(8));
console.log(str.indexOf('n'));
console.log(str.lastIndexOf('n'));
console.log(str.padEnd(25, '!'));
console.log(str.padStart(25, '*'));
console.log(str.repeat(2));
console.log(str.replace('o', 0));
console.log(str.replaceAll('o', 0));
console.log(str.slice(0, 5));
console.log(str.split(', '));
console.log(str.endsWith('John'));
console.log(str.startsWith('Bye'));
console.log(str.substring(7, 9));
console.log(str.substr(7, 10));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.toString());
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());


//3
const monthNumber = 1;
let result3 = ""; //const не давало переопределить константу

switch (monthNumber) {
     case 1: //были лишние ""
          result3 = "January";
          break;
     case 2: //лишние ""
          result3 = "February";
          break;
     case 3: //лишние ""
          result3 = "March";
          break; //отсутствовал break
     case 4: //лишние ""
          result3 = "April";
          break;
     case 5:
          result3 = "May";
          break;
     case 6:
          result3 = "June"; //было ==
          break;
}

console.log(result3);


//4
let day = "Monday"; //Неправильный регистр
let message;

if (day === "Monday") {
     message = "It's Monday!";
} 
else if (day === "Tuesday") { //регистр u
     message = "It's Tuesday!";
} 
else if (day === "Wednesday") {
     message = "It's Wednesday!";
} 
else if (day === "Thursday") { //регистр T
     message = "It's Thursday!";
} 
else if (day === "Friday") {
     message = "It's Friday!";
} 
else if (day === "Saturday") {
     message = "It's Saturday!"; //sunday, а должно быть saturday + Its 
} 
else if (day === "Sunday") {
     message = "It's Sunday!";
} 
else {
     message = "Invalid day!";
}

console.log(message);


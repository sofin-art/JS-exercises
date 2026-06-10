let a = -1;
let b = -2;
let operator = "/";

let result;

switch (operator) {
    case "*":
        result = a * b;
        break;
    case "/":
        if (b !== 0) {
            result = a / b;
        } else {
            result = "No division by zero.";
        }
        break;
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    default:
        result = "Invalid operator."
}

console.log(`${a} ${operator} ${b} = ${result}`);
//1
const arr = [10, 20, 30, 40];
[a, b, ...rest] = arr;

console.log(a, b);

//2
{
const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

const abc = [...a, ...b, ...c];
console.log(abc);
}
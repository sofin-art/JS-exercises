//1
{let height = 10;
let i = 0;

while (i < height) {
    let line = '';
    let spaces = i * 2;
    let maxNum = height - i - 1;
    let j;
    
    let s = 0;
    while (s < spaces) {
        line += ' ';
        s++;
    }
    
    j = maxNum;
    while (j >= 0) {
        line += j;
        if (j > 0) line += ' ';
        j--;
    }
    
    j = 1;
    while (j <= maxNum) {
        line += ' ' + j;
        j++;
    }
    
    console.log(line);
    i++;
}}

//2
{let n = 10;
let i = 1;

while (i <= n) {
    let spaces = ' '.repeat(n - i);
    let nums = '';
    let j = 1;
    
    while (j <= i) {
        nums += (j % 10);
        j++;
    }
    
    j = i - 1;
    while (j >= 1) {
        nums += (j % 10);
        j--;
    }
    
    console.log(spaces + nums);
    i++;
}

i = n - 1;
while (i >= 1) {
    let spaces = ' '.repeat(n - i);
    let nums = '';
    let j = 1;
    
    while (j <= i) {
        nums += (j % 10);
        j++;
    }
    
    j = i - 1;
    while (j >= 1) {
        nums += (j % 10);
        j--;
    }
    
    console.log(spaces + nums);
    i--;
}
}

//3
{
let h = 5;
let i = 1;
let count = 1;

while (i <= h) {
    let line = '';
    let j = 1;

    while (j <= i) {
        line += count;
        if (j < i) {
            line += ' ';
        }
        count++;
        j++;
    }
    console.log(line);
    i++;
}
}

//4
{
let h = 5;
let i = 1;

while (i <= h) {
    let row = '';
    let num = i;
    let step = h - 1;
    let j = 1;
    
    while (j <= i) {
        row += num;
        if (j < i) {
            row += " ";
        }
        num += step;
        step--;
        j++;
    }
    console.log(row);
    i++;
}
}

//5
{
let message = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
let deciphered = message.split("br").join('');

console.log(deciphered);
}

//6
{
let message = "Have a nice day!";
let i = 0;
let cipher = '';
let decipher = '';
let num = 1;

do {
    cipher += message[i];
    if (i <= message.length) {
        cipher += num;
        num++;
    }
    i++;
} while (i < message.length);
console.log(cipher);

i = 0;
while (i < cipher.length) {
    if (cipher[i] < '0' || cipher[i] > '9') {
        decipher += cipher[i];
    }
    i++;
}
console.log(decipher);

}

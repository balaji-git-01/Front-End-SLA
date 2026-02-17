let n =153;
let temp = n;
let sum = 0;
let r;

for (let i = n; i > 0; i = parseInt(i / 10)) {
    r = i % 10;         
    sum += r * r * r;   
}

if (temp === sum) {
    console.log(`The given number ${n} is an Armstrong number`);
} else {
    console.log(`The given number ${n} is NOT an Armstrong number`);
}

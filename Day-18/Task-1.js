/* let a=20;
for(let i=1;i<=20;i++){
    console.log(i); 
} */

/* let a=20;
for(let i=1;i<=a;i++){
    if(i%2!=0)
        console.log(i); 
} */

/* let a=20;
for(let i=0;i<=a;i++){
    if(i%2==0)
        console.log(i); 
} */

/* let a = 25;
for (let i = 0; i <= a; i += 5) {
    console.log(i);
} */

/* let a = 20;
let sum = 0;
for (let i = 0; i <= a; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log(sum); */

/* let a = 20;
let oddsum = 0;
for (let i = 0; i <= a; i++) {
    if (i % 2 != 0) {
        oddsum = oddsum + i;
    }
}
console.log(oddsum);  */

/* let a = 20;
let sum = 0;
for (let i = 1; i <= a; i++) {
    sum = sum + i;
}
console.log(sum); */

/* let a = 100;
let sum = 0;
for (let i = 0; i <= a; i+=5) {
    sum = sum + i;
}
console.log(sum); */

/* let a = 5;
let sum = 0;
let fact = 1;

for (let i = 1; i <= a; i++) {
    fact *= i;
    sum += i / fact;
}

console.log(sum); */

/* let a = 5;
let sum = 0;
let fact = 1;
for (let i = 1; i <= a; i++) {
    if (i % 2 == 0) {
        fact *= i;
        sum += i / fact;
    }
}
console.log(sum); */

//odd fact sum
let a = 5;
let sum = 0;
let fact = 1;
for (let i = 1; i <= a; i++) {
    if (i % 2 != 0) {
        fact *= i;
        sum += i / fact;
    }
}
console.log(sum);
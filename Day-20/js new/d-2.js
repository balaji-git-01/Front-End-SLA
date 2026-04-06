function oddsum(range) {
    let sum = 0;
    for (let i = 1; i <= range; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(oddsum(20));

let num=-20;

if(num>0){
    console.log("+ve");
}else{
    console.log("-ve");
    
}

let age=10;

console.log(age>=18 ? "eligible for vote" : "not eligible for vote");

let num2=15;

console.log(num2 % 5==0 ? "divisible by 5" : "not divisible by 5");

console.log(num2 % 5==0 && num2 %3 ==0 ? "divisible by 3 & 5" : "not divisible  by 3&5");
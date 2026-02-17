/* let s="";
for(let i=0;i<=5;i++){
if(i<5){
    s=s+i+"+";
}
else{
    s=s+i;
}
}
console.log(s);
 */


let num = 10;
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        count++;
    }
}

if (count === 2) {
    console.log(num + " is a Prime number");
} else {
    console.log(num + " is NOT a Prime number");
}


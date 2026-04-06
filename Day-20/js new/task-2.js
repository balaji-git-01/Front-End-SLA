/*  function evenOdd(n){
    if(n%2==0){
        console.log(n + " "+ "is even");
    }
    else{
         console.log(n +" "+ "is odd");
    }
}
evenOdd(10);
evenOdd(11);  */






//sum of n
/* 
function sum(s,e){
    let sum=0;
    for(let i=s;i<=e;i++){
      sum=sum+i;
    }
    return sum;
}

console.log(sum(1,10));
console.log(sum(1,100));  */

//factorial

 function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5)); 

//array sum

/* function sumArray(...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum);


}
sumArray(1, 2, 3, 4, 56, 6)
 */

//largest of 3 numbers
/* 
function largest(a,b,c){
    if(a>b && a>c){
        console.log(a+" is greatest");
    }
    else if(b>a && b>c){
         console.log(b+" is greatest");
    }
    else{
         console.log(c+" is greatest");
    }
}
largest(122,1,26)
largest(12,231,26)
largest(12,1,26) */

//EVEN SUM

/* function Evensum(s,e){
    let sum=0;
    for(let i=s;i<=e;i++){
      if(i%2==0)
        sum=sum+i;
    }
    return sum;
}

console.log(Evensum(1,10)); */
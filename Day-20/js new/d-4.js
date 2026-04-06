/* let array=[2,3,4,5,6,7,8,4,12,34];

let double=array.map(num=>num*2);

console.log(double);

let even=array.filter(num=>num%2===0);

console.log(even);

for(let num of array){
    console.log(num);
    
}

for(let num in array){
    console.log(array[num]);
    
}

let fruits=['apple','orange','kiwi'] */

let arr=[3,6,9,12,15];

let newarr=arr.filter(num=>num>6).map(num=>num+5);

console.log(newarr);

let doublearr=arr.reduce((total,num)=>
    total*num
);

console.log(doublearr);

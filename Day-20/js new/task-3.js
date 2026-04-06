//array with fruits

let fruits=['apple','orange','pineapple','watermelon','kiwi'];

console.log(fruits);

//first and last element

console.log("1st element " + fruits[0]);
console.log("1st element " + fruits[fruits.length-1]);

//array length

console.log(fruits.length);

//push 

fruits.push('grapes');

//pop

fruits.pop()

//unshift

fruits.unshift('blueberry');

//shift

fruits.shift()

//splice

fruits.splice(1,1,'Red banana')

console.log(fruits);

let arr1=[1,2,3,4,5];

let arr2=[6,7,8,9,10]

console.log([...arr1,...arr2]);


//includes

console.log(fruits.includes('apple'));
console.log(fruits.includes('orange'));

//for loop

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//for..of
for(element of fruits){
    console.log(element);
}

//for each
fruits.forEach((element,index)=> {
    console.log(index + " " +element); 
});


//sum of array

let arr=[1,21,32,4,52,6,7,8,9];
let sumres=arr.reduce((sum,num)=>{
    return sum+num;
},0);

console.log(sumres);

//max

let sortarr=arr.sort((a,b)=>a-b)
console.log(sortarr[arr.length-1]);

let arr3=[1,21,32,4,52,6,7,8,9];
let count=0;
for(let i=0;i<arr3.length;i++){
    if(arr3[i]%2===0){
        count++;
    }
}
console.log("count of evben in array "+count);

//start with

console.log(fruits.filter(ele=>ele.startsWith('a')));

//reverse

console.log(arr3.reverse());

console.log(arr3.sort((a,b )=> a-b));


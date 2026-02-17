let arr=[12,3,4,5,23,67,34,100];
let find=Math.max(...arr);
console.log(find);
//reduce
let total=arr.reduce((sum,n)=>sum+n,0)
console.log(total);
//even
let even=arr.filter(n=>n%2==0);
console.log(even);
//reverse
let arrreverse=arr.reverse();
console.log(arrreverse);
//includes
console.log(arr.includes(24));
console.log(arr.includes(100));
//find
let arr1=[12,3,4,5,23,67,34,100];
let finds=arr1.find(num=>num>20);

console.log(finds);




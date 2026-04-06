
const student={
    name : "Balaji",
    age : 25,
    grade : 'A'
}

console.log(student);
console.log(student.grade);
console.log(student.name);
console.log(student.age);

const car={
    brand: "Benz",
    model : "Sedans",
    Year: 2000
}

console.log(car.brand);

const oneplus={
    model : "13s",
    price : 48000,
    year: 2025
}

oneplus.os="color";
console.log(oneplus);


const book={
    title : "Art of love",
    author : "Balaji",
    pages : 200
}

book.pages=300;

console.log(book);


let employee = {
    name: "Balaji",
    age: 25,
    salary: 250000
};
if ("salary" in employee) {
    console.log("Salary exists");
} else {
    console.log("Salary does not exist");
}

function sum(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total=total+arr[i];
    }
    return total;
}

console.log(sum([1,23,3,24,5,6]));

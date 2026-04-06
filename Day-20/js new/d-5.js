const book={
    title : "Art of love",
    author : "Balaji",
    pages : 200
}

console.log("Autghor is " +book.author);
console.log(`Author name is ${book.author}`);




const student = {
  maths: 85,
  science: 90,
  english: 78
};

for (let subject in student) {
  console.log(subject + "  " + student[subject]);
}
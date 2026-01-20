let units = 180;
let bill;
if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = units * 7;
}
else {
    bill = units * 10;
}
console.log("electrcity bill: ₹" + bill);

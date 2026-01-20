let marks = window.prompt("Enter Your mark");
if (marks < 0 || marks > 100) {
    console.log("invalid marks");
}
else if (marks >= 90 && marks <= 100) {
    console.log("grade: A");
}
else if (marks >= 75 && marks <= 89) {
    console.log("grade: B");
}
else if (marks >= 50 && marks <= 74) {
    console.log("grade: C");
}
else {
    console.log("fail");
}
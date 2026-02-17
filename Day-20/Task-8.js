function fiveSeries(range) {
    let s = "";
    for (let i = 0; i <= range; i+=5) {
            s = s + i + "+";
    }
    return s;
}
console.log(fiveSeries(30));

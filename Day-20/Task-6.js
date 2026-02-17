function plusSeries(range) {
    let s = "";
    for (let i = 0; i <= range; i++) {
      if(i%2==0){
          if (i < range) {
            s = s + i + "+";
        }
        else {
            s = s + i;
        }
      }
    }
    return s;
}
console.log(plusSeries(20));

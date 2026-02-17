let s=1;
let e=1000;
for (let n = s; n <= e; n++) {
    let temp = n;
    let sum = 0;
    let r;
    for (let i = n; i > 0; i = parseInt(i / 10)) {
        r = i % 10;
        sum += r * r * r;
    }

    if (temp === sum) {
        console.log(n);
    }
}

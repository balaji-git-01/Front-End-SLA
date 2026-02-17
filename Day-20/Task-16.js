function armstrongSeries(start, end) {
    for (let n = start; n <= end; n++) {
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
}
armstrongSeries(1, 1000);

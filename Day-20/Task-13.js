function Prime(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log(num + " is a Prime number");
    } else {
        console.log(num + " is NOT a Prime number");
    }
}
Prime(10);

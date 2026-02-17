const factorial = (n) => {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
};

let n = parseInt(window.prompt("Enter a factorial number"));
console.log(factorial(n));

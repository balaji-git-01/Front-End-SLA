let arr = [1, 2, 2, 3];

let count = {};

arr.forEach(item => {
  count[item] = arr.filter(x => x === item).length;
});

console.log(count);

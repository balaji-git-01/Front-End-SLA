let arr = [1, 2, 3, 2, 4, 1, 5];
let duplicate = [];
for (let i = 0; i < arr.length; i++) {
  if (!duplicate.includes(arr[i])) {
    duplicate.push(arr[i]);
  }
}
console.log(duplicate);

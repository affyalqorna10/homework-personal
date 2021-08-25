let numbers = [2, 40, 2, 1, 1];
const total = numbers.reduce((a, b) => a + b);
console.log(total);
if (total >= 30) {
  console.log("It's Big");
}

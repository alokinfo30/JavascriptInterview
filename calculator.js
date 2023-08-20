function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y !== 0) {
    return x / y;
  } else {
    throw new Error("Cannot divide by zero");
  }
}

const num1 = 10;
const num2 = 5;

console.log(add(num1, num2));      // Expected output: 15
console.log(subtract(num1, num2)); // Expected output: 5
console.log(multiply(num1, num2)); // Expected output: 50
console.log(divide(num1, num2));   // Expected output: 2

/*
  Write a function `splitOddEven` that takes an array of numbers as a 
  parameter and returns an object containing two arrays: 
  one with odd numbers and another with even numbers.
*/

function splitOddEven(numbers) {
  // Your code here
  const result = {
    odd: [],
    even: [],
  };

  for (const number of numbers) {
    if (number % 2 === 0) {
      result.even.push(number);
    } else {
      result.odd.push(number);
    }
  }

  return result;

}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = splitOddEven(inputArray);

console.log(result.odd);   // Expected output: [1, 3, 5, 7, 9]
console.log(result.even);  // Expected output: [2, 4, 6, 8, 10]
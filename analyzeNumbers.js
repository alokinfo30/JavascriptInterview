function analyzeNumbers(numbers) {
  const totalCount = numbers.length;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / totalCount;
  const highest = Math.max(...numbers);
  const lowest = Math.min(...numbers);

  return {
    totalCount,
    sum,
    average,
    highest,
    lowest,
  };
}

const numbersArray = [12, 7, 18, 5, 24, 9, 3, 21];
const analysis = analyzeNumbers(numbersArray);

console.log(analysis.totalCount);   // Expected output: 8
console.log(analysis.sum);          // Expected output: 99
console.log(analysis.average);      // Expected output: 12.375
console.log(analysis.highest);      // Expected output: 24
console.log(analysis.lowest);       // Expected output: 3

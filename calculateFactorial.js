function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

console.log(calculateFactorial(5));  // Expected output: 120
console.log(calculateFactorial(0));  // Expected output: 1
console.log(calculateFactorial(8));  // Expected output: 40320

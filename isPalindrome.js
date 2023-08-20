function isPalindrome(str) {
  // Convert the input string to lowercase to make the comparison case-insensitive
  const lowerStr = str.toLowerCase();
  
  // Reverse the string using the split, reverse, and join methods
  const reversedStr = lowerStr.split('').reverse().join('');
  
  // Compare the original string with the reversed string
  return lowerStr === reversedStr;
}

console.log(isPalindrome("racecar"));      // Expected output: true
console.log(isPalindrome("hello"));        // Expected output: false
console.log(isPalindrome("level"));        // Expected output: true
console.log(isPalindrome("programming"));  // Expected output: false

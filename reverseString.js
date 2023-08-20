function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));      // Expected output: "olleh"
console.log(reverseString("world"));      // Expected output: "dlrow"
console.log(reverseString("javascript")); // Expected output: "tpircsavaj"

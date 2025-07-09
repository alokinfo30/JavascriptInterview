
// Without using BUILT-IN Methods
To complete your code so that it **finds and logs the duplicates along with their counts** from a string (`str`), you need to:

1. Track the **frequency of each character**.
2. Identify **duplicates** (those with count > 1).
3. Log them with their **counts**.

Here’s the **corrected and completed code**:

const str = "programming"; // Example input
const arr = []; // To store unique characters
const freq = {}; // To store frequency of characters

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  
  // Count frequency
  freq[char] = (freq[char] || 0) + 1;

  // Store unique characters
  if (!arr.includes(char)) {
    arr.push(char);
  }
}

console.log("Length of unique array:", arr.length);

// Find and log duplicates with counts
console.log("Duplicates and their counts:");
for (const char in freq) {
  if (freq[char] > 1) {
    console.log(`${char}: ${freq[char]}`);
  }
}
```

### 🔍 Example Output for `str = "programming"`:

```
Length of unique array: 8
Duplicates and their counts:
r: 2
g: 2
m: 2

const arr = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!arr.includes(char)) { // Check for duplicates
      arr.push(char);
    }
  }

  console.log("Length of unique array:", arr.length);

// Example usage:
const myString = "hello";
const uniqueArray = stringToUniqueArray(myString);
console.log(uniqueArray); // Output: ["h", "e", "l", "o"] and console logs 4

const myString2 = "aabbccddeeff";
const uniqueArray2 = stringToUniqueArray(myString2);
console.log(uniqueArray2); // Output: ["a", "b", "c", "d", "e", "f"] and console logs 6

const myString3 = "";
const uniqueArray3 = stringToUniqueArray(myString3);
console.log(uniqueArray3); // output: [] and console logs 0

const notString = 123;
const notStringArray = stringToUniqueArray(notString);
console.log(notStringArray); // output: "Input is not a string"









const inputString = "Abcdedfavafdalafad";
const outputString = processString(inputString);
console.log(outputString); // Abcde, dfav, afd, al, af, ad


function processString(str) {
  const result = [];
  let current = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (current.includes(char)) {
      result.push(current);
      current = char; // start new group
    } else {
      current += char;
    }
  }

  if (current) {
    result.push(current);
  }

  return result.join(", ");
}

const inputString = "Abcdedfavafdalafad";
const outputString = processString(inputString);
console.log(outputString); // Abcde, dfav, afd, al, af, ad
Or
========≠===≠==================≠==≠==========≠{=============

const inputString = "Abcdefavafdalfad";

function processString(str) {
    let parts = [];  
    let partLengths = [5, 4, 3, 2, 2, 2];
    let startIndex = 0;
  
    for (let length of partLengths) {
        let part = str.substring(startIndex, startIndex + length);
        parts.push(part);
       startIndex += length;
    }   
    return parts.join(", ");
}
const outputString = processString(inputString);
console.log(outputString); // "Abcde, dfav, afd, al, af, ad"


Write  a function that accepts an integer as parameter and prints this pattern. 
In this case the input parameter is number 5

5 4 3 2 1
5 4 3 2
5 4 3
5 4 
5 


function printPattern(n) {
  // Outer loop to handle the number of rows
  for (let i = 0; i < n; i++) {
    let row = '';
    // Inner loop to handle the numbers in each row
    for (let j = n; j > i; j--) {
      row += j + ' ';
    }
    console.log(row.trim());
  }
}

// Call the function with the input parameter 5
printPattern(5);




Reverse Words in a String: Write a function that takes a sentence as input and returns the sentence with the words reversed.
  For example, if the input is "Hello, World!", the output should be "World! Hello,".
  
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

Second Largest Number: Develop a function that finds the second largest number in an array of numbers. 
  For example, if the input is [3, 8, 2, 10, 5], the output should be 8.

function findSecondLargestNumber(arr) {
  let firstLargest = arr[0];
  let secondLargest = arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
        secondLargest = firstLargest;
      firstLargest = arr[i];
    
  } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {    
                    secondLargest = arr[i];       
    }
  }
  return secondLargest;
}

const result= findSecondLargestNumber([3, 8, 2, 10, 5]);
console.log(result);

another ways:

function findSecondLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        throw new Error("No second largest element found");
    }

    return secondLargest;
}

// Example usage:
const numbers = [3, 8, 2, 10, 5];
console.log(findSecondLargest(numbers)); // Output: 8


// FIRST LARGEST NUMBER
function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

Check for Palindrome: Write a function that takes a string as input and checks if it is a palindrome. 
A palindrome is a word or phrase that reads the same forwards and backward. For example, if the input is "level", the output should be true.


  function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

const result= isPalindrome("level");
console.log(result);
  
 
FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and 
  for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
    
for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) {
    output += 'Fizz';
  }
  if (i % 5 === 0) {
    output += 'Buzz';
  }
  console.log(output || i);
}

Find the missing number: Given an array of numbers from 1 to N, where one number is missing, 
  write a function to find the missing number. For example, if the input is [1, 2, 4, 5, 6], the output should be 3.

function findMissingNumber(arr) {
    const n = arr.length + 1; // since one number is missing, the length of the full array should be arr.length + 1
    const expectedSum = (n * (n + 1)) / 2; // sum of numbers from 1 to N
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

// Example usage:
const numbers = [1, 2, 4, 5, 6];
console.log(findMissingNumber(numbers)); // Output: 3

find and log the duplicates along with their counts in an array,

  function findDuplicates(arr) {
    var counts = {};
    var duplicates = {};

    // Count occurrences of each element
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (counts[num] === undefined) {
            counts[num] = 1;
        } else {
            counts[num]++;
        }
    }

   // Identify duplicates
 
  for (const element in counts) {
    if (counts[element] > 1) {
      duplicates[element] = counts[element];
    }
  }


    // Log duplicates and their counts
    console.log('Duplicates and their counts:', duplicates);
}

// Example usage:
var arr = [1, 2, 2, 3, 4, 4, 5];
findDuplicates(arr);

Remove duplicates from an array: Write a function that takes an array as input and returns a new array with duplicate elements removed. 
  For example, if the input is [1, 2, 2, 3, 4, 4, 5], the output should be [1, 2, 3, 4, 5].


function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isUnique = false;
        break; // Exit inner loop if duplicate found
      }
    }
    if (isUnique) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arr);
console.log(uniqueArray);

Check for Anagrams: Write a function that takes two strings as input and checks if they are anagrams. 
  Anagrams are two words or phrases that use the same letters in a different order. For example, if the inputs are "listen" and "silent", the output should be true.
  
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount1 = {};
    const charCount2 = {};

    // Count characters in str1
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count characters in str2
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare character counts
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage:
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true

const str3 = "hello";
const str4 = "world";
console.log(areAnagrams(str3, str4)); // Output: false

Find the longest word: Write a function that takes a sentence as input and returns the longest word in the sentence. 
  For example, if the input is "The quick brown fox jumps over the lazy dog", the output should be "jumps".

function findLongestWord(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Initialize variables
  let longestWord = "";
  let longestWordLength = 0;

  // Loop through each word
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const currentWordLength = currentWord.length;

    // Check if current word is longer than the current longest
    if (currentWordLength > longestWordLength) {
      longestWord = currentWord;
      longestWordLength = currentWordLength;
    }
  }

  // Return the longest word
  return longestWord;
}

// Example usage
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log(longestWord); // Output: "jumps"



function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


function countCharacterOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}


JavaScript function to find and log duplicate words in a sentence:

function findDuplicateWords(sentence) {
    // Convert the sentence to lowercase and split it into words
    const words = sentence.toLowerCase().split(/\W+/);
    const wordCount = {};
    const duplicates = [];

    // Count the occurrences of each word
    words.forEach(word => {
        if (word) {
            if (wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }
    });

    // Identify the duplicate words
    for (const word in wordCount) {
        if (wordCount[word] > 1) {
            duplicates.push(word);
        }
    }

    // Log the duplicate words
    console.log("Duplicate words:", duplicates);
}

// Example usage
const sentence = "This is a test. This test is only a test.";
findDuplicateWords(sentence);


reverse the words in a sentence without using array methods, 



function reverseWords(sentence) {
    let result = '';
    let word = '';
    
    for (let i = sentence.length - 1; i >= 0; i--) {
        if (sentence[i] === ' ') {
            if (word !== '') {
                result = word + ' ' + result;
                word = '';
            }
        } else {
            word = sentence[i] + word;
        }
    }
    
    if (word !== '') {
        result = word + ' ' + result;
    }

    // Remove the trailing space
    return result.trim();
}

// Example usage
const sentence = "This is a test sentence.";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "sentence. test a is This"


reverse the words in a sentence without using array methods, and position of special characters must not change

function reverseWordsPreserveSpecial(sentence) {
    let result = '';
    let word = '';
    let specialChars = {};
    
    // Collect special characters and their positions
    for (let i = 0; i < sentence.length; i++) {
        if (!(/[a-zA-Z]/).test(sentence[i])) {
            specialChars[i] = sentence[i];
        }
    }
    
    // Reverse the words in the sentence
    for (let i = sentence.length - 1; i >= 0; i--) {
        if ((/[a-zA-Z]/).test(sentence[i])) {
            word = sentence[i] + word;
        } else if (sentence[i] === ' ') {
            if (word !== '') {
                result += word + ' ';
                word = '';
            }
        }
    }
    
    // Add the last word
    if (word !== '') {
        result += word;
    }

    // Insert special characters back in their original positions
    let finalResult = '';
    let resultIndex = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (specialChars.hasOwnProperty(i)) {
            finalResult += specialChars[i];
        } else {
            finalResult += result[resultIndex] || '';
            resultIndex++;
        }
    }

    return finalResult;
}

// Example usage
const sentence = "Th!s is, a t3st s*ntence.";
const reversedSentence = reverseWordsPreserveSpecial(sentence);
console.log(reversedSentence); // Output: "sntence! t3st, a is Th*s."

To reverse the words in a sentence without reversing the sentence itself, and without changing the positions of special characters



function reverseWords(sentence) {
  const isLetter = (char) => char.match(/[a-zA-Z]/);
  
  // Step 1: Identify and store special character positions
  let specialCharPositions = [];
  for (let i = 0; i < sentence.length; i++) {
    if (!isLetter(sentence[i])) {
      specialCharPositions.push({char: sentence[i], index: i});
    }
  }

  // Step 2: Extract words and reverse them
  let words = "";
  for (let i = 0; i < sentence.length; i++) {
    if (isLetter(sentence[i])) {
      words += sentence[i];
    } else {
      words += " ";
    }
  }

  // Step 3: Split words and reverse them individually
  let reversedWords = "";
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      word = words[i] + word; // Prepend to reverse the word
    } else {
      reversedWords += word + " ";
      word = "";
    }
  }
  reversedWords += word; // Append the last word

  // Step 4: Reconstruct the sentence with special characters in original positions
  let result = "";
  let j = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (specialCharPositions.length > 0 && specialCharPositions[0].index === i) {
      result += specialCharPositions.shift().char;
    } else {
      result += reversedWords[j];
      j++;
    }
  }
  
  return result;
}

// Example usage:
let sentence = "he!l?lo wo.rld";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "eh!l?ol dl.row"


 Write a Program to Find the consecutive letter count and display the output like => Input :"aaavvccfr", Output:"a3v2c2f1r1" 


function countDuplicates(str) {
    var counts = {};
    var result = '';
    
    for (var i = 0; i < str.length; i++) {
        var count = 1; // Initialize count for the current character
        
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
        
        if (counts[str[i]] === undefined) {
            counts[str[i]] = count;
        }
    }

    // Construct the result string
    for (var char in counts) {
        result += char + counts[char];
    }

    return result;
}

// Example usage:
var input = "aabbccdde";
var duplicateCounts = countDuplicates(input);
console.log(duplicateCounts); // Output: "a2b2c2d2e1"


// Using BUILT IN Methods

Reverse a string: Write a function that takes a string as input and returns the string in reverse order. For example, if the input is "Hello, World!",
  the output should be "!dlroW ,olleH".
  
function reverseString(str) {
  return str.split('').reverse().join('');
}

Find the largest number in an array: Write a function that takes an array of numbers as input and returns the largest number in the array. 
For example, if the input is [3, 8, 2, 10, 5], the output should be 10.

function findLargestNumber(arr) {
  return Math.max(...arr);
}

Check for Palindrome: Write a function that takes a string as input and checks if it is a palindrome. A palindrome is a word or phrase that reads the same 
  forwards and backwards.  For example, if the input is "level", the output should be true.
    
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, 
  print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

Find the missing number: Given an array of numbers from 1 to N, where one number is missing, write a function to find the missing number. 
  For example, if the input is [1, 2, 4, 5, 6], the output should be 3.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, num) => acc + num, 0);
  return sum - arrSum;
}

Remove duplicates from an array: Write a function that takes an array as input and returns a new array with duplicate elements removed. 
  For example, if the input is [1, 2, 2, 3, 4, 4, 5], the output should be [1, 2, 3, 4, 5].

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

Check for Anagrams: Write a function that takes two strings as input and checks if they are anagrams. Anagrams are two words or phrases 
  that use the same letters in a different order. For example, if the inputs are "listen" and "silent", the output should be true.
    
function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

Find the longest word: Write a function that takes a sentence as input and returns the longest word in the sentence. 
  For example, if the input is "The quick brown fox jumps over the lazy dog", the output should be "jumps".

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
}

Check for Prime Number: Write a function that takes a number as input and checks if it is a prime number. 
  A prime number is a number that is only divisible by 1 and itself. For example, if the input is 7, the output should be true.

  function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
Count the occurrences of a character in a string: Write a function that takes a string and a character as input and 
  returns the number of times the character appears in the string. For example, if the input is "hello", "l" the output should be 2.

function countCharacterOccurrences(str, char) {
  const charRegExp = new RegExp(char, 'g');
  return str.match(charRegExp).length;
}

find and log the duplicates along with their counts in an array,
function findDuplicates(arr) {
  const elementCounts = new Set(); // Set to store unique elements seen

  for (const element of arr) {
    if (elementCounts.has(element)) {
      console.log(`Element ${element} appeared ${elementCounts.size} times.`);
    } else {
      elementCounts.add(element); // Add unique element to the Set
    }
  }
}

const arr = [1, 2, 2, 3, 4, 4, 5];
findDuplicates(arr);


Write  a function that accepts an integer as parameter and prints this pattern. 
In this case the input parameter is number 5

5 4 3 2 1
5 4 3 2
5 4 3
5 4 
5 

function printPattern(n, current = n) {
  // Base case: when current is 0, stop the recursion
  if (current === 0) {
    return;
  }

  // Construct the row string
  let row = '';
  for (let i = n; i >= current; i--) {
    row += i + ' ';
  }

  // Print the current row
  console.log(row.trim());

  // Recursive call to print the next row
  printPattern(n, current - 1);
}

// Call the function with the input parameter 5
printPattern(5);

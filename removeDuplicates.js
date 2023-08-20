function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (const item of arr) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    
    return uniqueArray;
}

const originalArray = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = removeDuplicates(originalArray);

console.log(uniqueArray);  // Expected output: [1, 2, 3, 4, 5, 6, 7]

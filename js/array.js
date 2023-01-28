// Arrays 
// Create an array with initial values
let myArray = [1, 2, 3, 4, 5];

// Access an element by index
console.log(myArray[2]); // Output: 3

// Add an element to the end of the array
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Remove an element from the end of the array
let lastElement = myArray.pop();
console.log(lastElement); // Output: 6
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Add an element to the beginning of the array
myArray.unshift(0);
console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]

// Remove an element from the beginning of the array
let firstElement = myArray.shift();
console.log(firstElement); // Output: 0
console.log(myArray); // Output: [1, 2, 3, 4, 5]

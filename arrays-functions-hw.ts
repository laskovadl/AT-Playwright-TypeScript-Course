// Create an array of strings and add a new element at the end of the array. 
// Log the result.

let letters: string[] = ['A', 'B', 'C', 'D'];
letters.push('E');
console.log(letters);

// Create an array of numbers and remove the first element from the array. 
// Log the result.

let nums: number[] = [1, 2, 3, 4, 5];
nums.shift();
console.log(nums);

// Use the map method to create a new array and divide each number by 2 “num / 2” from [1, 2, 3, 4, 5]. 
// Log the result.

let numbers: number[] = [1, 2, 3, 4, 5];
let divideNums = numbers.map((x) => x / 2);
console.log(divideNums);

// Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. 
// Log the result.

let allNums: number[] = [3, 7, 1, 9, 12, 4];
let greaterNums: number[] = allNums.filter((num: number) => num > 5);
console.log(greaterNums);

// Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order.
// Log the result.

const arrayNums: number[] = [9, 3, 7, 2, 8, 5];
arrayNums.sort();
console.log(arrayNums);

// Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. 
// Log the result.

let fruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let firstThree: string[] = fruits.slice(0, 3);
console.log(firstThree);

// Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . 
// Log the result.

let vehicles: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
vehicles.splice(1, 2);
console.log(vehicles);

// Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them.
// Use if/else statement to find the largest number.
// Log the result.

function findLargest(numOne: number, numTwo: number, numThree: number): number {
    if (numOne >= numTwo && numOne >= numThree) {
        return numOne;
    } else if (numTwo >= numOne && numTwo >= numThree) {
        return numTwo;
    } else 
        return numThree;
    }
console.log(findLargest(100, 100, 10));


// Write a function “convertToCentimeters” which receives parameter “inches” and add default value it and convert to centimeters.
// Log the result with default parameter and with passed parameter.

// Write a function named “calculateArea” that takes a required width parameter and an optional height parameter.
// If height is not provided, assume the shape is a square.
// 1. Print all elements of an array
let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ----------------------------------------------

// 2. Print array in reverse order
let arr2 = new Array(5);
arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
arr2[3] = 40;
arr2[4] = 50;

for (let j = arr2.length - 1; j >= 0; j--) {
    console.log(arr2[j]);
}

// ----------------------------------------------

// 3. Initialize array with same value using fill
let arr3 = new Array(10).fill(10);
console.log(arr3);

// OR using loop
let arr4 = new Array(10);
for (let k = 0; k < arr4.length; k++) {
    arr4[k] = 50;
}
console.log(arr4);

// ----------------------------------------------

// 4. Print an array inside a function
let number = new Array(5);
number[0] = 100;
number[1] = 200;
number[2] = 300;
number[3] = 400;
number[4] = 500;

const printArray = function () {
    for (let index = 0; index < number.length; index++) {
        console.log(number[index]);
    }
}
printArray();

// ----------------------------------------------

// 5. Pass array and size as parameters to function
const numberArray = function (printNumber, size) {
    for (let index = 0; index < size; index++) {
        console.log(printNumber[index]);
    }
}

let printNumber = new Array(6);
printNumber[0] = 1;
printNumber[1] = 2;
printNumber[2] = 3;
printNumber[3] = 4;
printNumber[4] = 5;
printNumber[5] = 6;

numberArray(printNumber, 5); // Only print first 5 elements

// ----------------------------------------------

// 6. Find a specific element by value in array (example: most powerful animal)
const animalName = function (powerFullAnimal, size) {
    for (let index = 0; index < size; index++) {
        let mostPowerFull = powerFullAnimal[3];
        if (mostPowerFull === powerFullAnimal[index]) {
            console.log(`Most powerful animal is: ${mostPowerFull}`);
        }
    }
}

let powerFullAnimal = new Array(4);
powerFullAnimal[0] = "Tiger";
powerFullAnimal[1] = "Elephant";
powerFullAnimal[2] = "Dragon";
powerFullAnimal[3] = "Cobra";

animalName(powerFullAnimal, 4);

// ----------------------------------------------

// 7. Find maximum and minimum elements in array
let maxElement = new Array(5);
maxElement[0] = 10;
maxElement[1] = 6;
maxElement[2] = 9;
maxElement[3] = 14;
maxElement[4] = 15;

let max = maxElement[0];
let min = maxElement[0];

for (let i = 1; i < maxElement.length; i++) {
    if (maxElement[i] > max) {
        max = maxElement[i];
    } else if (maxElement[i] < min) {
        min = maxElement[i];
    }
}
console.log(`The maximum element is ${max}`);
console.log(`The minimum element is ${min}`);

// ----------------------------------------------

// 8. Find sum of all elements in array
const sumOfElement = function (digits, size) {
    let base = 0;
    for (let index = 0; index < size; index++) {
        base += digits[index];
    }
    return base;
}

let digits = new Array(5);
digits[0] = 2;
digits[1] = 10;
digits[2] = 5;
digits[3] = 3;
digits[4] = -5;

let sum = sumOfElement(digits, 5);
console.log(`The sum of all digits is: ${sum}`);

// ----------------------------------------------

// 9. Linear Search in array
const linearSearch = function (nums, size) {
    let k = 11;
    for (let i = 0; i < size; i++) {
        if (k === nums[i]) {
            return i;
        }
    }
    return -1;
}

let nums = new Array(5);
nums[0] = 1;
nums[1] = 4;
nums[2] = 5;
nums[3] = 7;
nums[4] = 8;

let index = linearSearch(nums, 5);

if (index !== -1) {
    console.log(`The index of number is: ${index}`);
} else {
    console.log("Number not found in the array.");
}

// ----------------------------------------------

// 10. Reverse and print an array (without swapping)
const reverseArray = function (numbers, size) {
    for (let i = size - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}

let numbers = new Array(5);
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

reverseArray(numbers, 5);

// ----------------------------------------------

// 11. Reverse an array using swap
const reverseWithSwap = function (arr, size) {
    for (let i = 0; i < Math.floor(size / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[size - i - 1];
        arr[size - i - 1] = temp;
    }
    console.log("Array after reverse using swap:", arr);
}

let arrToReverse = [10, 20, 30, 40, 50];
reverseWithSwap(arrToReverse, arrToReverse.length);

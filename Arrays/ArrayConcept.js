// Array is a type of data which is store a simillar type of data in a contigeous memery location.

// ➤ Declare and Initialize Together:

const fruits = ["apple", "mango", "banna"];
// console.log(fruits);

// ➤ Declare First, Then Initialize:
let fruitsName;
fruitsName = ["apple", "banana", "cherry"];
// console.log(fruitsName);

// ➤ Empty Array Initialization:
let numbers = [];
// console.log(numbers)

// ✅ 2. Using the Array Constructor
let arrayConstructor = new Array("marco", "gun", "bolt");
// console.log(arrayConstructor)

// ➤ Empty Array Initialization:
let arrayEmpty = new Array();
// console.log(arrayEmpty);

let arraySize = new Array(5);
// arraySize[0]=10;
// console.log(arraySize);

let mixedArray = [1, "hello", true, null];
// console.log(mixedArray);

// How to set the all values of 0.
let conArray = new Array(1000);
for (let i = 0; i < conArray.length; i++) {
    conArray[i]=0;    
}
// console.log(conArray)

// 🔹 1. User-Defined Functions with Arrays

function printNumber(arr){
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i]);
    }
}

let digits = [1,2,3,4,5];
printNumber(digits);


function findMaximum(num){
    let max = num[0];
    for(let i=1; i<num.length; i++){
        if(num[i]>max){
            max=num[i];
        }
    }
    // console.log(`The maximum value is = ${max}`);
}

let values = [10, 12, 50, 15, 19, 23];
findMaximum(values);

function findMinimum(arr){
    let mini=arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]<mini){
        mini=arr[i]
        }
    }
    // console.log(`The minimum value is = ${mini}`)
}

let mini = [4, 6, 8, 0, 3, 7];
findMinimum(mini);

// Sum of all array element

function sumOfElement(values){
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum+=values[i];
    }
    // console.log(`The sum of values are = ${sum}`);
}

let arr = [10, 20, 30, 40, 50]
sumOfElement(arr)

// Linear Search

function linearSearch(arr){
    let key = 12;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            // console.log(`The key is present = ${key}`);
            return; // exit after finding the key
        }
    }
    // console.log(`The key is not present = ${key}`);
}

let linearElm = [4, 5, -6, 7, 9, 10];
linearSearch(linearElm);

// Reverse array without loop

function reverseArray(arr){
    let start = 0;
    let end = arr.length-1;
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

let element = [2, 5, 7, 9];
reverseArray(element)
// console.log(element);
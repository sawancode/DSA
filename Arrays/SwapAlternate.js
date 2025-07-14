// ✅ Function to Swap Alternate Elements in an Array

// Define a function that takes an array and its size as input
const swapAlternate = function(arr, size){
    // Loop through the array with step of 2
    for (let i = 0; i < size - 1; i += 2) {
        // Store current element in a temporary variable
        let temp = arr[i];
        // Swap the current element with the next one
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    // Return the updated array
    return arr; 
}

// Example usage
let arr = [5,2,9,4,7,6,1,0];

// Call the function and pass array and its size
swapAlternate(arr, 8);

// Print the modified array
console.log(arr);  // Output: [2, 5, 4, 9, 6, 7, 0, 1]

/*
📘 Line-by-Line Explanation:

1. We define the function `swapAlternate` to swap adjacent elements in an array.
2. Inside the for loop:
   - `i += 2` makes sure we go to alternate indices (0, 2, 4, etc.).
   - We swap `arr[i]` with `arr[i+1]` using a temporary variable.
3. The modified array is returned and logged to the console.

📌 Output:
[2, 5, 4, 9, 6, 7, 0, 1]

🧠 Time Complexity: O(n)
🧠 Space Complexity: O(1)

-------------------------------------------------------------------

// ✅ Optimal Version (Using Destructuring and No Size Parameter)

function swapAlternate(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        // Swapping using destructuring assignment (ES6 feature)
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
    return arr;
}

let arr2 = [5, 2, 9, 4, 7, 6, 1, 0];
console.log(swapAlternate(arr2));  // Output: [2, 5, 4, 9, 6, 7, 0, 1]

/*
✅ Advantages of the Optimal Version:
- Cleaner and modern syntax
- No need to pass size manually
- Uses ES6 destructuring for swapping
*/

// Function: uniqueOccurrences
// Purpose: To check whether the number of occurrences of each value in the array is unique

/**
 * @param {number[]} arr - Input array of integers
 * @return {boolean} - Returns true if all values have unique frequencies, else false
 */
var uniqueOccurrences = function(arr) {

    // Step 1: Create a map to count the frequency of each number
    const freqMap = new Map();

    // Step 2: Iterate through the array and populate the frequency map
    for (let num of arr) {
        // If the number already exists in the map, increment its count
        // Otherwise, set it to 1
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 3: Create a set to store the frequencies
    const freqSet = new Set();

    // Step 4: Iterate through the values (frequencies) of the map
    for (let count of freqMap.values()) {
        // If the frequency is already in the set, it means a duplicate count exists
        // So we return false
        if (freqSet.has(count)) {
            return false;
        }
        // Otherwise, add the frequency to the set
        freqSet.add(count);
    }

    // Step 5: If we complete the loop without finding duplicates, return true
    return true;
};

// Example usage:
// console.log(uniqueOccurrences([1,2,2,1,1,3])); // true
// console.log(uniqueOccurrences([1,2]));         // false
// console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); // true


// ✅ Key Concepts:
// Map: To store frequency of elements.

// Set: To track if any frequency is repeated.

// Time Complexity: O(n) where n is the number of elements in the array.

// Space Complexity: O(n) for storing elements and frequencies.
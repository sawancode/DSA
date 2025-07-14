// Unique Number I

// Examples :

// Input: arr[] = [1, 2, 1, 5, 5]
// Output: 2
// Explanation: Since 2 occurs once, while other numbers occur twice, 2 is the answer.
// Input: arr[] = [2, 30, 2, 15, 20, 30, 15]
// Output: 20
// Explanation: Since 20 occurs once, while other numbers occur twice, 20 is the answer.

class Solution {
    findUnique(arr) {
        // code here
        let ans = 0;
        for(let i=0; i<arr.length; i++){
            ans = ans ^ arr[i];
        }
        return ans;
    }
}

// This is the another way to solve unique number on the leetcode

// Unique Number of Occurrences
// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000


var uniqueOccurrences = function(arr) {
    const freq = {}; 

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const counts = []; 

    for (let key in freq) {
        counts.push(freq[key]);
    }

    counts.sort((a, b) => a - b); 

    for (let i = 1; i < counts.length; i++) {
        if (counts[i] === counts[i - 1]) {
            return false;
        }
    }

    return true;
};

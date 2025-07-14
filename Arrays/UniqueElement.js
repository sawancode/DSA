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
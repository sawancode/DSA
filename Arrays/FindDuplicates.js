// Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3
 

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n

var findDuplicate = function(nums) {
    // Step 1: Initialize the slow and fast pointers to the start of the array
    let slow = nums[0];
    let fast = nums[0];

    // Step 2: First phase - Detect the cycle
    do {
        slow = nums[slow];           // Move slow by 1 step
        fast = nums[nums[fast]];     // Move fast by 2 steps
    } while (slow !== fast);         // Continue until they meet (cycle detected)

    // Step 3: Second phase - Find the entrance to the cycle (duplicate number)
    slow = nums[0];                  // Reset slow to the start
    while (slow !== fast) {
        slow = nums[slow];          // Move slow by 1 step
        fast = nums[fast];          // Move fast by 1 step
    }

    return slow;                    // The position where they meet is the duplicate
};

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);  // Fix 1: Proper bracket for Math.floor

    while (start <= end) {
        if (arr[mid] === key) {
            return mid;
        }
        if (key > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);  // Fix 2: Same fix here
    }

    return -1;
}

let arr = [2, 4, 6, 8, 12, 18];
const result = binarySearch(arr, 12);  // Fix 3: No `size`, and correct argument
console.log(result);  // Output: 4

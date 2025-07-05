// Q. Reverse String

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function(s) {
    let start=0;
    let end=s.length-1;

    while(start<end){
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
}
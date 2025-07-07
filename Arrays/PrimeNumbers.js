// Q. Prime Number

// Examples :

// Input: n = 7
// Output: true
// Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.
// Input: n = 25
// Output: false
// Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.
// Input: n = 1
// Output: false
// Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered prime.

class Solution {
 isPrime(n) {
 // code here
 if(n<=1) return false;
 
 let count = 0;
 
 for(let i=1; i<=n; i++){
 if(n%i===0){
 count++;
 }
 }
 return count === 2;
 }
}

Optimal:
class Solution {
 isPrime(n) {
 // code here
 if(n <= 1) return false;
 if(n === 2) return true;
 if(n % 2 === 0) return false;
 
 for(let i=3; i <= Math.sqrt(n); i+=2){
 if(n % i === 0) return false;
 }
 return true;
 }
}


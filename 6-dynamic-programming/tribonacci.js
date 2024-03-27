// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Without memoization, time complexity would be eponential O(3^n)
const tribonacci = (n, tribVals = {}) => {
    if(n === 0 || n === 1) return 0;
    if(n === 2) return 1;
    if(n in tribVals) return tribVals[n];
    
    tribVals[n] = tribonacci(n - 1, tribVals) + tribonacci(n - 2, tribVals) + tribonacci(n - 3, tribVals);
    return tribVals[n];
};

// Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.
// The 0-th and 1-st numbers of the sequence are both 0.
// The 2-nd number of the sequence is 1.
// To generate further numbers of the sequence, calculate the sum of previous three numbers.
// Solve this recursively.

// Approach: 
// Set base cases for the first 3 numbers of the sequence 0 0 1 (n = 0 to n = 2)
// Check if the nth number is in memo and return the value
// Otherwise calculate the new value to store in the memo by calliing the fn recursively

// Tc: linear O(n)
// Sc: linear O(n)
const tribonacci2 = (n, memo = {}) => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n]
};
// Write a function, fibonacci, that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.
// The 0-th number of the sequence is 0.
// The 1-st number of the sequence is 1.
// To generate further numbers of the sequence, calculate the sum of previous two numbers.
// You must solve this recursively.

// Approach
// Base cases of n = 0 or 1 returning n
// Fib = sum of two previous numbers
// recursively call fibonacci with n - 1 and n - 2 and sum the two results

// TC: O(2^n) exponential
// SC: O(n) linear
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = {
  fibonacci,
};

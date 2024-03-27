// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Without memoization, time complexity would be eponential O(2^n)
const fib = (n, fibValues = {}) => {
    if(n === 0) {
        fibValues[n] = 0;
        return 0;
    }
    
    if(n === 1){
        fibValues[n] = 1;
        return 1;
    }
    
    let n1Fib = fibValues[n - 1] ? fibValues[n - 1] : fibValues[n - 1] = fib(n - 1, fibValues)
    let n2Fib = fibValues[n - 2] ? fibValues[n - 2] : fibValues[n - 2] = fib(n - 2, fibValues)
    
    fibValues[n] = n1Fib + n2Fib;
    return fibValues[n];  
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const fibBetter = (n, fibValues = {}) => {
    if(n === 0 || n === 1) return n;
    if(n in fibValues) return fibValues[n];
    
    fibValues[n] = fib(n - 1, fibValues) + fib(n - 2, fibValues);
    return fibValues[n];  
};


// Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.
// The 0-th number of the sequence is 0.
// The 1-st number of the sequence is 1.
// To generate further numbers of the sequence, calculate the sum of previous two numbers.
// Solve this recursively.

// Approach: 
// Use object to store reusable results for constant lookup O(1)
// At each rescursive step, store new result into memo object

// Time complexity: w/o memo -> exponential O(2^n) ; w/ memo -> linear O(n)
// Space complexity: linear O(n)
const fib2 = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];
  
  const fib1 = fib(n - 1, memo);
  const fib2 = fib(n - 2, memo);

  memo[n] = fib1 + fib2;
  return memo[n];
};
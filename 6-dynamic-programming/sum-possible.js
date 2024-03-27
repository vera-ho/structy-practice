// Time complexity: O(n x a) where n = length of numbers; a = amount
// Space complexity: O(a) linear
// Without memoization, time complexity would be O(n^a) exponential
const sumPossible = (amount, numbers, sums = {}) => {
    if(amount === 0) return true;
    if(amount < 0) return false;
    if(amount in sums) return sums[amount];
  
    for(let num of numbers) {
        if(sumPossible(amount - num, numbers, sums)) {
            sums[amount] = true;
            return sums[amount];
        }
    }
    
    sums[amount] = false;
    return false;
};

// Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.
// You may assume that the target amount is non-negative.

// Approach: 
// Iterative subtract numbers in array from amount and recursively call sumPossible on the result
// Sum is possible when the amount can become 0
// Store sums in a memo

// TC: w/o memo -> O(n^ a); w/ memo -> linear O(a * n) where a = amount & n = length of numbers
// SC: linear O(a)
const sumPossible2 = (amount, numbers, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (amount in memo) return memo[amount];
  
  for (let num of numbers) {
    memo[amount] = sumPossible(amount - num, numbers, memo);
    if (memo[amount]) return true;
  }
  memo[amount] = false;
  return false;
};

// Time complexity: O(n x sqrt(n))
// Space complexity: O(n) linear
const summingSquares = (n, sums = {}) => {
    if(n === 0) return 0;
    if(n in sums) return sums[n];
    
    let minSum = Infinity;
    let i = 1;
    while(i <= Math.sqrt(n)) {
        let square = Math.pow(i, 2);
        let sum = summingSquares(n - square, sums);
        if(sum < minSum) minSum = sum;
        i += 1;
    }
    
    sums[n] = minSum + 1;
    return sums[n];
};
  
  // Brute force without sums object would be TC: O(sqrt(n) ^ n); SC: O(n)
  //  - Branching factor based on the square root of n, is the base (here sqrt(n))
  //  - Raised to n because of the height of the tree

//   ------
// Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.
// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.
// Given 12:
// summingSquares(12) -> 3
// The minimum squares required for 12 is three, by doing 4 + 4 + 4.
// Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.

// Approach: 
// Start iterating from 1 to n and square the value. Subtract the value from n if the square is less than n
// Use recursion to continually subtract a square from current n and count number of subtractions
// Save calculated values of n in memo so it doesn't have to be recalculated each time
// Save the smallest count from each level
const summingSquares2 = (n, memo = {}) => {
  if (!n) return 0;
  if (n in memo) return memo[n];

  let minSquares = Infinity;
  for (let num = 1; num <= Math.sqrt(n); num++) {
    const square = num * num;
    const numSquare = summingSquares(n - square, memo);
    if (numSquare < minSquares) {
      minSquares = numSquare;
    }
  }

  memo[n] = minSquares + 1;
  return memo[n];
};

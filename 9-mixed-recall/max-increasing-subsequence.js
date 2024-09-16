// Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument. The function should return the length of the longest subsequence of strictly increasing numbers.
// A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.

// Approach: Dynamic Programming to prevent exponential complexity
// Track index and at each index, take or not take it
// Track previously taken value (initialized to -Infinity)
// For each decision, track count of increasing values
// memo tracks "key: value" pairs of "prev + index: count"

// Time complexity: O(n^2) quadratic
// Space complexity: O(n^2) quadratic
const maxIncreasingSubseq = (numbers, index = 0, prev = -Infinity, memo = {}) => {
  const key = prev + ' ' + index;
  if (key in memo) return memo[key];
  if (index >= numbers.length) return 0;
  
  // Don't take
  const noTakeCount = maxIncreasingSubseq(numbers, index + 1, prev, memo);
  
  // Take
  const current = numbers[index];
  let takeCount = 0;
  if (current > prev) {
    takeCount = maxIncreasingSubseq(numbers, index + 1, current, memo);

    if (takeCount >= noTakeCount) {
      memo[key] = takeCount + 1;
      return memo[key];
    }
  }

  memo[key] = noTakeCount;
  return memo[key];
};

// const numbers = [4, 18, 20, 10, 12, 15, 19];
// maxIncreasingSubseq(numbers); // -> 5

// const numbers = [12, 9, 2, 5, 4, 32, 90, 20];
// maxIncreasingSubseq(numbers); // -> 4

// const numbers = [42, 50, 51, 60, 55, 70, 4, 5, 70];
// maxIncreasingSubseq(numbers); // -> 5

// const numbers = [7, 14, 10, 12];
// maxIncreasingSubseq(numbers); // -> 3

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
// maxIncreasingSubseq(numbers); // -> 21

// const numbers = [
//   1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,
//   104,
// ];
// maxIncreasingSubseq(numbers); // -> 23

// const numbers = [
//   1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10, 18, 14, 15, 16, 17,
//   18, 19, 20, 21, 100, 101, 102, 103, 104, 105,
// ];
// maxIncreasingSubseq(numbers); // -> 27

// const numbers = [
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1,
// ];
// maxIncreasingSubseq(numbers); // -> 1
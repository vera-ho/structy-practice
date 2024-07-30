// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair that sums to the target.

// Approach
// iterate through the array and calculate the difference between the target and each array value
// use an object to store the value (key) and array index (value)
// continue to iterate and check if the difference is a key in the object

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const pairSum = (numbers, targetSum) => {
  const diffs = {};

  for (let i = 0; i < numbers.length; i++) {
    const diff = targetSum - numbers[i];
    if (diff in diffs) return [diffs[diff], i];
    diffs[numbers[i]] = i;
  }
};

// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
// pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
// pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
// pairSum([1, 6, 7, 2], 13); // -> [1, 2]
// pairSum([9, 9], 18); // -> [0, 1]
// pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]

// const numbers = [];
// for (let i = 0; i <= 30000; i += 1) {
//   numbers.push(i);
// }
// pairSum(numbers, 59999); // -> [ 29999, 30000 ] 

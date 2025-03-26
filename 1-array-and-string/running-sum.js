// Write a function, runningSum, that takes in an array of numbers. The function should return a new array of the same length where each element contains the running sum up to that index of the original array.

// For example, the i-th result should be the sum of all elements 0 to i:
//   result[i] = numbers[0] + numbers[1] + numbers[2] + ... + numbers[i]

// Approach
// Store running sum in a variable
// Iterate through the array and calculate a running sum
// Push running sum into result array

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const runningSum = (numbers) => {
    const sums = [];
    let currentSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        currentSum += numbers[i];
        sums.push(currentSum);
    }

    return sums;
};

// runningSum([4, 2, 1, 6, 3, 6]); // -> [ 4, 6, 7, 13, 16, 22 ]
// runningSum([10, 5, -2, 1, 1]); // -> [ 10, 15, 13, 14, 15 ]
// runningSum([12, 88, 0, -50, 30, 2]); // -> [ 12, 100, 100, 50, 80, 82 ]
// runningSum([2]); // -> [ 2 ]
// runningSum([]); // -> [ ]

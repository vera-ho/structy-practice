// Write a function, hasSubarraySum, that takes in an array of numbers and a targetSum. The function should return a boolean indicating whether or not there exists a subarray of numbers that sums to the given target.

// A subarray is a consecutive series of one or more elements of the array.

// Approach
// Calculate pre-fix sums
// Nested loops to calcuate the difference btwn sums[end] minus sums[start]
// Return true if the difference equals the targetSum

// Time complexity: O(n^2) quadratic
// Space complexity: O(n) linear
const hasSubarraySum = (numbers, targetSum) => {
    const runningSums = [0];
    let runningSum = 0;

    // Generate prefix sums
    for (let i = 0; i < numbers.length; i++) {
        runningSum += numbers[i];
        runningSums.push(runningSum);
    }

    for (let i = 0; i < runningSums.length; i++) {
        for (let j = i + 1; j < runningSums.length; j++) {
            const diff = runningSums[j] - runningSums[i];
            if (diff === targetSum) {
                return true;
            }
        }
    }

    return false;
};

// hasSubarraySum([1, 3, 1, 4, 3], 8); // -> true
// hasSubarraySum([1, 3, 1, 4, 3], 2); // -> false
// hasSubarraySum([1, 3, 1, 1, 3], 2); // -> true
// hasSubarraySum([5], 5); // -> true
// hasSubarraySum([4, 2, 5, 1, 5, -2, 8], 9); // -> true
// hasSubarraySum([4, 2, 5, 1, 5, -2, 8], 10); // -> false
// hasSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1], 9); // -> true
// hasSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1], 10); // -> false

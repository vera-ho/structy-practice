// Write a function, hasSubarraySum, that takes in an array of numbers and a targetSum. The function should return a boolean indicating whether or not there exists a subarray of numbers that sums to the given target.

// A subarray is a consecutive series of one or more elements of the array.

// Approach
// Calculate running sums
// Loop through running sums and create a set of each value seen
//   For each value, fnd the difference of value - targetSum
//   If the difference is in the set, a subarraySum has been found

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const hasSubarraySum = (numbers, targetSum) => {
    const runningSums = [0];
    let runningSum = 0;

    // Generate prefix sums
    for (let i = 0; i < numbers.length; i++) {
        runningSum += numbers[i];
        runningSums.push(runningSum);
    }

    const seenNums = new Set();
    for (let i = 0; i < runningSums.length; i++) {
        const currentNum = runningSums[i];
        const diff = currentNum - targetSum;
        if (seenNums.has(diff)) {
            return true;
        } else {
            seenNums.add(currentNum);
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

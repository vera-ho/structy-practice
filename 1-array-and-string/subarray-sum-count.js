// Write a function, subarraySumCount, that takes in an array of numbers and a targetSum. The function should return the number of subarrays that sum to the given target.
// A subarray is a consecutive series of one or more elements of the array.
// Goal to achieve O(n) time complexity

// Approach
// Re-use has-subarray-sum by creating an array of prefix sums
// Loop through the prefix array and find the difference between (element - targetSum)
//   Use an object to store element: seen count kv pairs
//   If the difference is a key in the object, add the value of seen count to the subarrayCount
//   Update the object by updating the seen count for that key

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const subarraySumCount = (numbers, targetSum) => {
    // Generate prefix sums
    const runningSums = [0];
    let runningSum = 0;
    for (let num of numbers) {
        runningSum += num;
        runningSums.push(runningSum);
    }

    // Find the count of subarray sums
    const seenCount = {};
    let subarrayCount = 0;
    for (let currNum of runningSums) {
        const diff = currNum - targetSum;

        // update seenCount object
        if (!(currNum in seenCount)) {
            seenCount[currNum] = 0;
        }
        seenCount[currNum]++;

        // update subarrayCount
        if (diff in seenCount) {
            subarrayCount += seenCount[diff];
        }
    }

    // console.log(subarrayCount)
    return subarrayCount;
};

// subarraySumCount([1, 3, 1, 4, -2, 3], 5);  // -> 3
// subarraySumCount([1, 3, 1, 4, 3], 5); // -> 2
// subarraySumCount([1, 3, 1, 4, 3], 2); // -> 0
// subarraySumCount([1, 3, 1, 4, 3], 8); // -> 2
// subarraySumCount([1, 3, 1, 4, 3], 8); // -> 2
// subarraySumCount([-2, 1, 1, 1, -1, 1, 1, 1, 1], 3); // -> 8

// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.

// Approach
// Use an object to count occurences of each character
// Iterate through each array and compare counts
// Push the min count of any item into the output array and set the object values to 0

// Time complexity: O(n + m) linear
// Space complexity: O(n + m) linear
const intersectionWithDupes = (a, b) => {
    const intersections = [];
    const countA = {};
    const countB = {};

    // Fill up counters
    for (let item of a) {
        if (!countA[item]) {
            countA[item] = 0;
        }
        countA[item]++;
    }

    for (let item of b) {
        if (!countB[item]) {
            countB[item] = 0;
        }
        countB[item]++;
    }

    // Check for intersections
    for (let item of a) {
        if (!countB[item]) continue;

        const matches = Math.min(countA[item], countB[item]);
        for (let i = 0; i < matches; i++) {
            intersections.push(item);
        }
        countA[item] = 0;
        countB[item] = 0;
    }

    return intersections;
};

// intersectionWithDupes(
//   ["a", "b", "c", "b"],
//   ["x", "y", "b", "b"]
// ); // -> ["b", "b"]

// intersectionWithDupes(
//   ["q", "b", "m", "s", "s", "s"],
//   ["s", "m", "s"]
// ); // -> ["m", "s", "s"]

// intersectionWithDupes(
//   ["p", "r", "r", "r"],
//   ["r"]
// ); // -> ["r"]

// intersectionWithDupes(
//   ["r"],
//   ["p", "r", "r", "r"]
// ); // -> ["r"]

// intersectionWithDupes(
//   ["t", "v", "u"],
//   ["g", "e", "d", "f"]
// ); // -> [ ]

// intersectionWithDupes(
//   ["a", "a", "a", "a", "a", "a",],
//   ["a", "a", "a", "a"]
// ); // -> ["a", "a", "a", "a"]

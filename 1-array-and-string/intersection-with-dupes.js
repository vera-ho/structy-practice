// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.

// Approach
// Use an object to count occurences of each character
// Iterate through each array and compare counts
// Compare counts in both counters and push min of matches into output array

// Time complexity: O(n + m) linear
// Space complexity: O(n + m) linear
const intersectionWithDupes = (a, b) => {
    const intersections = [];
    const countA = countArrayElements(a);
    const countB = countArrayElements(b);

    for (let item in countA) {
        if (!countB[item]) continue;
        const matches = Math.min(countA[item], countB[item]);
        for (let i = 0; i < matches; i++) {
            intersections.push(item);
        }
    }

    return intersections;
};

const countArrayElements = (array) => {
    const counts = {};
    for (let ele of array) {
        if (!counts[ele]) counts[ele] = 0;
        counts[ele]++;
    }
    return counts;
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

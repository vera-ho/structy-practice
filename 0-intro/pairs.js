// Write a function, pairs, that takes in an array as an argument. The function should return an array contain all unique pairs of elements.
// You may return the pairs in any order and the order of elements within a single pair does not matter.
// You can assume that the input array contains unique elements.

// Approach
// Use nested loops where the outer loop will track the index of the first element of a pair
// The inner loop with track the second element of a pair
// Push the pairs into the output array

// Time complexity: O(n^2) quadratic
// Space complexity: O(n^2) quadratic
const pairs = (elements) => {
    const pairArray = [];

    for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
            pairArray.push([elements[i], elements[j]]);
        }
    }

    return pairArray;
};

// pairs(["a", "b", "c"]); // ->
// // [
// //    ["a", "b"],
// //    ["a", "c"],
// //    ["b", "c"]
// // ]

// pairs(["a", "b", "c", "d"]); // ->
// // [
// //    ["a", "b"],
// //    ["a", "c"],
// //    ["a", "d"],
// //    ["b", "c"],
// //    ["b", "d"],
// //    ["c", "d"]
// // ]

// pairs(["cherry", "cranberry", "banana", "blueberry", "lime", "papaya"]); // ->
// // [
// //   [ "cherry", "cranberry" ],
// //   [ "cherry", "banana" ],
// //   [ "cherry", "blueberry" ],
// //   [ "cherry", "lime" ],
// //   [ "cherry", "papaya" ],
// //   [ "cranberry", "banana" ],
// //   [ "cranberry", "blueberry" ],
// //   [ "cranberry", "lime" ],
// //   [ "cranberry", "papaya" ],
// //   [ "banana", "blueberry" ],
// //   [ "banana", "lime" ],
// //   [ "banana", "papaya" ],
// //   [ "blueberry", "lime" ],
// //   [ "blueberry", "papaya" ],
// //   [ "lime", "papaya" ]
// // ]

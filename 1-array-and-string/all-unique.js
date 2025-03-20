// Write a function, allUnique, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items.

// Approach
// Iterate through the array and create a key value pair for each element
// key is the element and value is the count initialized to 1
// If the key already exists, return false since there is a duplicate

// Timce complexity: O(n) linear
// Space complexity: O(n) linear
const allUnique = (items) => {
    const counter = {};

    for (let item of items) {
        if (counter[item]) {
            return false;
        }
        counter[item] = 1;
    }

    return true;
};

// allUnique(["q", "r", "s", "a"]); // -> true
// allUnique(["q", "r", "s", "a", "r", "z"]); // -> false
// allUnique(["red", "blue", "yellow", "green", "orange"]); // -> true
// allUnique(["cat", "cat", "dog"]); // -> false
// allUnique(["a", "u", "t", "u", "m", "n"]); // -> false

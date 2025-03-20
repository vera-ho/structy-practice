// Write a function, allUnique, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items.

// Approach
// Create a set from items to store only unique elements of items
// Compare the size of the set and the item array length
// If the array contains all unique items, the sizes will be the same

// Timce complexity: O(n) linear
// Space complexity: O(n) linear
const allUnique = (items) => {
    const uniqueSet = new Set(items);
    return uniqueSet.size === items.length;
};

// allUnique(["q", "r", "s", "a"]); // -> true
// allUnique(["q", "r", "s", "a", "r", "z"]); // -> false
// allUnique(["red", "blue", "yellow", "green", "orange"]); // -> true
// allUnique(["cat", "cat", "dog"]); // -> false
// allUnique(["a", "u", "t", "u", "m", "n"]); // -> false

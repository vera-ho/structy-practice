// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.
// You must solve this recursively.

// Approach: 
// Each recursive step, take the first item in the array and count the length of the string
// Call the function again for the remaining array 
// Base case is an array length of zero, returning string count of zero
// Return string count plus result from function call

// TC: O(n^2) quadratic
// SC: O(n^2) quadratic
const sumOfLengths = (strings) => {
  if(strings.length === 0) return 0;
  const [current, ...otherStrings] = strings;
  return current.length + sumOfLengths(otherStrings);
};

// Optimize with pointer
// TC: O(n) linear
// SC: O(n) linear
const sumOfLengthsOptimized = (strings, idx = 0) => {
  if(idx === strings.length) return 0;
  return strings[idx].length + sumOfLengthsOptimized(strings, idx + 1);
};

// sumOfLengths(["goat", "cat", "purple"]); // -> 13
// sumOfLengths(["bike", "at", "pencils", "phone"]); // -> 18
// sumOfLengths([]); // -> 0
// sumOfLengths(["", " ", "  ", "   ", "    ", "     "]); // -> 15
// sumOfLengths(["0", "313", "1234567890"]); // -> 14 

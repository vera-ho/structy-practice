// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.
// You must solve this recursively.

// Approach: 
// Each recursive step, take the first item in the array and count the length of the string
// Call the function again for the remaining array 
// Base case is an array length of zero, returning string count of zero
// Return string count plus result from function call

// TC: O(n) linear
// SC: O(n) linear due to stack
const sumOfLengths = (strings) => {
  if(strings.length === 0) return 0;
  const [current, ...otherStrings] = strings;
  return current.length + sumOfLengths(otherStrings);
};

module.exports = {
  sumOfLengths,
};

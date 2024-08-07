// Write a function, reverseString, that takes in a string as an argument. The function should return the string with its characters in reverse order. You must do this recursively.

// Approach:
// Base case is when string is empty, return empty string
// Each recursive step, split the first char and the rest of the string
// Call reverseString on the remainder and add the first character to the end of the result

// TC: O(n^2)
// SC: O(n^2)
const reverseString = (s) => {
  if (s.length === 0) return '';
  return reverseString(s.slice(1)) + s[0];
};

// Optimization
// TC: O(n) linear
// SC: O(n) linear
const reverseStringOptimized = (s, idx = 0) => {
  if (idx === s.length) return '';
  return reverseStringOptimized(s, idx + 1) + s[idx];
};

// reverseString("hello"); // -> "olleh"
// reverseString("abcdefg"); // -> "gfedcba"
// reverseString("stopwatch"); // -> "hctawpots"
// reverseString(""); // -> ""
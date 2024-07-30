// Write a function, palindome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.
// You must solve this recursively.

// Approach
// Base case is empty string, return true
// Split the string into first, last and remaining characters (middle) until the string length is < 4
// If the first and last characters are the same, call palindome on remaining string

// TC: O(n^2) quadratic
// SC: O(n^2) quadratic
const palindrome = (s) => {
  if (s.length <= 1) return true;
  if (s[0] !== s[s.length - 1]) return false;
  return palindrome(s.slice(1, s.length - 1))
};

// Optimization?
// Use left and right pointers instead of slicing
// TC: O(n) linear
// SC: O(n) linear
const palindromeOptimized = (s, start = 0, end = s.length - 1) => {
  if (s.length <= 1 || start === end) return true;
  if (s[start] !== s[end]) return false;
  return palindromeOptimized(s, start + 1, end - 1);
};

// palindrome("pop"); // -> true
// palindrome("kayak"); // -> true
// palindrome("pops"); // -> false
// palindrome("boot"); // -> false
// palindrome("rotator"); // -> true
// palindrome("abcbca"); // -> false
// palindrome(""); // -> true
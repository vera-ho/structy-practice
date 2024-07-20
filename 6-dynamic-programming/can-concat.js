// Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.
// You may reuse words of the array as many times as needed.

// Approach
// In each recursive step, iterate throught array and check if the string starts with eah word
// For each word that starts the string, call canConcat again with the remainder
// If none of the words can be found starting the string, return false
// Save the solution to each substring in memo

// Base case
// If string is empty, return true
// if string is in memo, return precalculated result

// With memoization
// Time complexity: O(n * s) where n is the length of the array and s is the string size
// Space complexity: O(s)
const canConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s];
  if (s.length === 0) return true;

  for (let word of words) {
    if (s.startsWith(word)) {
      const substring = s.slice(word.length);
      memo[s] = canConcat(substring, words, memo);
      if (memo[s]) return true;
    }
  }

  memo[s] = false;
  return memo[s];
};

// canConcat("oneisnone", ["one", "none", "is"]); // -> true
// canConcat("oneisnone", ["on", "e", "is"]); // -> false
// canConcat("oneisnone", ["on", "e", "is"]); // -> false
// canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
// canConcat("santahat", ["santah", "hat"]); // -> false
// canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
// canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]); // -> false

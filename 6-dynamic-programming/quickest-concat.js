// Write a function, quickestConcat, that takes in a string and an array of words as arguments. The function should return the minimum number of words needed to build the string by concatenating words of the array. If it is not possible to build the string, then return -1.
// You may use words of the array as many times as needed.

// Approach
// Find all possible ways to build the string using the words
// If the string is an empty string, return 0 which signifies a possible combination in the recursive stack
// For each word in the array of words, check if the string starts with that word
//   Track the minimum number of words needed
//   If it does, remove the word and call quickestConcat again with the remaining string
//   Take the result and check if the value is > -1 (meaning the creating string is possible). 
//   Update the minimum if it's possible and less than the current value
// Return the minimum value + 1 if possible, otherwise -1

// Time complexity: O(n * s) polynomial where n is the array length and s is the string length
// Space complexity: O(s) linear
const quickestConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s];
  if (s.length === 0) return 0;

  let minimum = Infinity;
  for (let word of words) {
    if (s.startsWith(word)) {
      const nextString = s.slice(word.length);
      const quickest = quickestConcat(nextString, words, memo);

      if (quickest >= 0 && quickest < minimum) {
        minimum = quickest;
      }
    }
  }

  if (minimum >= 0 && minimum < Infinity) {
    memo[s] = minimum + 1;
  } else {
    memo[s] = -1;
  }

  return memo[s];
};

//****************************************************************************/

// Retain infinity until all calclulations have finished
const quickestConcat2 = (s, words) => {
  const result = _quickestConcat(s, words);
  return result === Infinity ? -1 : result;
}
  
const _quickestConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s];
  if (s.length === 0) return 0;

  let minimum = Infinity;
  for (let word of words) {
    if (s.startsWith(word)) {
      const nextString = s.slice(word.length);
      const quickest = 1 + _quickestConcat(nextString, words, memo);
      minimum = Math.min(minimum, quickest)
    }
  }

  memo[s] = minimum;
  return memo[s];
};

// quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']); // -> 2
// quickestConcat('caution', ['ion', 'caut', 'caution']); // -> 1
// quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']); // -> 4
// quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch']); // -> 3
// quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']); // -> -1
// quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu']); // -> 2
// quickestConcat('rongbetty', ['wrong', 'bet']); // -> -1
// quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']); // -> 7
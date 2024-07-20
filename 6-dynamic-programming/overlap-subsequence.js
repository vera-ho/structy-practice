// Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.
// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

// Approach
// Use two pointers to track current position for each string and a memo object
// When the characters at the pointers match, add 1 to length of subsequence
//  - Increment pointers for both strings for the next recursive call of the function
//  - Return 1 + result of function call
// When the characters don't match, there is a 0 overlapping length
//  - Make two next recurisve calls of the function, each incrementing for one of the strings
//  - Keep the larger return value from both calls of the function and return it
// If one of the strings are empty, there is 0 overlapping length
// If the indexes have been calculated already, we know the resulting length saved in the memo obj

// Time complexity: O(n * m) where n and m are the lengths of each string
// Space complexity: O(n * m)
const overlapSubsequence = (str1, str2, idx1 = 0, idx2 = 0, memo = {}) => {
  const key = idx1 + ' ' + idx2;
  if (key in memo) return memo[key];
  if (idx1 >= str1.length || idx2 >= str2.length) return 0;

  if (str1[idx1] === str2[idx2]) {
    memo[key] = 1 + overlapSubsequence(str1, str2, idx1 + 1, idx2 + 1, memo);
  } else {
    memo[key] = Math.max(
      overlapSubsequence(str1, str2, idx1 + 1, idx2, memo),
      overlapSubsequence(str1, str2, idx1, idx2 + 1, memo)
    )
  }
  
  return memo[key]; 
};

// overlapSubsequence("dogs", "daogt"); // -> 3
// overlapSubsequence("xcyats", "criaotsi"); // -> 4
// overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
// overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
// overlapSubsequence(
//   "mumblecorebeardleggingsauthenticunicorn",
//   "succulentspughumblemeditationlocavore"
// ); // -> 15
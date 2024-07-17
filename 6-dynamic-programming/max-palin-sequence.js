// Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.
// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

// Approach
// Use two pointers to track beginning and end of the string
// Check if the characters at each pointer match
//   If they match, move both pointers inward and note the palindrome length grows by 2. Recursively call the fn with the new substring.
//   If they don't match, call the fn twice, with moving either the start or end index inwards by 1 and the palindrome length does not grow. Check the results of both fn calls and keep the greater value.
// Stop when the index of end is less than the start
// Memo by saving index pairs and the result

// time complexity: O(n^2) polynomial
// space complexity: O(n^2) polynomial
const maxPalinSubsequence = (str, start = 0, end = str.length - 1, memo = {}) => {
  const key = start + ' ' + end;
  if (key in memo) return memo[key];
  
  if (start > end) return 0;
  if (start === end) return 1;

  const startChar = str[start];
  const endChar = str[end];
  if (startChar === endChar) {
    memo[key] = 2 + maxPalinSubsequence(str, start + 1, end - 1, memo);;
    return memo[key];
  } 

  const takeStart = maxPalinSubsequence(str, start + 1, end, memo);
  const takeEnd = maxPalinSubsequence(str, start, end - 1, memo);
  memo[key] = Math.max(takeStart, takeEnd);;
  return memo[key];
}

// maxPalinSubsequence("luwxult"); // -> 5
// maxPalinSubsequence("xyzaxxzy"); // -> 6
// maxPalinSubsequence("lol"); // -> 3
// maxPalinSubsequence("boabcdefop"); // -> 3
// maxPalinSubsequence("z"); // -> 1
// maxPalinSubsequence("chartreusepugvicefree"); // -> 7
// maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty"); // -> 15
// maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe"); // -> 31
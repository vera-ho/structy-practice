// Write a function, tokenReplace, that takes in an object of tokens and a string. The function should return a new string where tokens are replaced.
// Tokens are enclosed in a pair of '$'. You can assume that the input string is properly formatted and '$' is not used in the string except to enclose a token. Tokens should be replaced from left to right in the string (see test_05).

// Approach
// Use two pointers to find the starting and ending '$' character
// As the pointers are being incremented, add characters to output array
// Increment both pointers until we see the first '$' at the start
// Then increment the end pointer until the next '$'
// Check if there is a corresponding token and if so, add the token's corresponding value to the array
// Set pointers to the end of the token and continue incrementing

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const tokenReplace = (s, tokens) => {
  const string = [];
  let start = 0;
  let end = 1;

  while (start < s.length) {
    const char = s[start];
    
    if (char !== '$') {
      string.push(char);
      start++;
      end++;
    } else {
      if (s[end] !== '$') {
        end++;
      } else {
        const token = s.slice(start, end + 1);
        const value = tokens[token];
        
        string.push(value);
        start = end + 1;
        end = start + 1;
      }
    }
  }

  return string.join('');
};

module.exports = {
  tokenReplace,
};

// const tokens = {
//   $LOCATION$: "park",
//   $ANIMAL$: "dog",
// };
// tokenReplace("Walk the $ANIMAL$ in the $LOCATION$!", tokens);
// // -> 'Walk the dog in the park!'

/******************************************************************************/

// const tokens = {
//   $ADJECTIVE$: "quick",
//   $VERB$: "hopped",
//   $DIRECTION$: "North",
// };
// tokenReplace("the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward", tokens);
// // -> 'the quick fox hopped quickly Northward'

/******************************************************************************/

// const tokens = {
//   $greeting$: "hey programmer",
// };
// tokenReplace("his greeting is always $greeting$.", tokens);
// // -> 'his greeting is always hey programmer.'

/******************************************************************************/

// const tokens = {
//   $A$: "lions",
//   $B$: "tigers",
//   $C$: "bears",
// };
// tokenReplace("$A$$B$$C$, oh my.", tokens);
// // -> 'lionstigersbears, oh my.'

/******************************************************************************/

// const tokens = {
//   $A$: "lions",
//   $B$: "tigers",
//   $C$: "bears",
// };
// tokenReplace("$B$", tokens);
// // -> 'tigers'

/******************************************************************************/

// const tokens = {
//   $second$: "beta",
//   $first$: "alpha",
//   $third$: "gamma",
// };
// tokenReplace("$first$second$third$", tokens);
// // -> 'alphasecondgamma'

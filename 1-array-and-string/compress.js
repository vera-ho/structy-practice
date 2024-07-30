// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.
// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// Approach: 
// Track current and previous char to identify when a continuous substring of a char has broken and a new substring begins
// When prev != curr, add 1 to count to account for prev and reset count
// When prev == curr, add 1 to count
// Add to compressed when prev != curr by pushing the char if count is 1 or pushing count & char when count > 1

// time complexity: O(n) - runs through n characters in string s
// space complexity: O(n) only need storage for max n characters in string s (if each character shows up just once)
function compress(s) {
  const compressed = [];
  let count = 0;
  
  for(let i = 0; i < s.length + 1; i++) {
    const curr = s[i];
    const prev = i > 0 ? s[i - 1] : s[i];
    
    if (curr === prev) {
      count++;
    } else if (count === 1) {
      compressed.push(prev);
    } else {
      compressed.push(...[count, prev]);
      count = 1;
    }
  }
  
  return compressed.join('');
}

// compress('ccaaatsss'); // -> '2c3at3s'
// compress('ssssbbz'); // -> '4s2bz'
// compress('ppoppppp'); // -> '2po5p'
// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
// compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// // -> '127y'

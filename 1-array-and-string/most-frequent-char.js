// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// approach
// loop through string 's' and count all characters - store in object
// loop through each key of object and set max value of string if a key's value is greater than current max value of string

// time complexity: O(n)
// space complexity: O(n)
const mostFrequentChar = (s) => {
  let maxValue = s[0];
  const count = {};
  
  for (let char of s) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1
    }
  }
  
  for(let char in count) {
    if (count[char] > count[maxValue]) {
      maxValue = char
    }
  }
  
  return maxValue;
};

// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('abby'); // -> 'b'
// mostFrequentChar('mississippi'); // -> 'i'
// mostFrequentChar('potato'); // -> 'o'
// mostFrequentChar('eleventennine'); // -> 'e'
// mostFrequentChar("riverbed"); // -> 'r'

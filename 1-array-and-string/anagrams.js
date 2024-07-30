// Write a function, anagrams, that takes in two strings as arguments. 
// The function should return a boolean indicating whether or not the strings are anagrams. 
// Anagrams are strings that contain the same characters, but in any order.

// approach: use an object to count characters in one string
//           then subtract characters from the other string. 
//           if all characters are 0 at the end, then the strings are anagrams

// time complexity: O(n) 
// space complexity: O(n)
const anagrams2 = (s1, s2) => {
  if (s1.length != s2.length) return false;
  
  const count = {};
  
  for (let char of s1) {
    if (count[char]) {
      count[char] = count[char] + 1
    } else {
      count[char] = 1;
    }
  }

  for (let char of s2) {
    if (count[char]) {
      count[char] = count[char] -1
    } else {
      count[char] = -1
    }
  }
  
  return Object.values(count).every(v => v === 0)
};

// anagrams('restful', 'fluster'); // -> true
// anagrams('cats', 'tocs'); // -> false
// anagrams('monkeyswrite', 'newyorktimes'); // -> true
// anagrams('paper', 'reapa'); // -> false
// anagrams('elbow', 'below'); // -> true
// anagrams('tax', 'taxi'); // -> false
// anagrams('taxi', 'tax'); // -> false
// anagrams('night', 'thing'); // -> true
// anagrams('abbc', 'aabc'); // -> false
// anagrams('po', 'popp'); // -> false
// anagrams('pp', 'oo') // -> false

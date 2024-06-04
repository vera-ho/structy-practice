/** Approach
 *      - Use hash for O(1) reads
 *      - Loop through one string and save key - value pairs of char - count
 *      - Loop through other string and deduct from counter
 *      - If any counter is not 0 in the hash, they are not anagrams
 */

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const anagrams = (s1, s2) => {
    if(s1.length != s2.length) return false;
    
    let ctr = {};

    for(let char of s1) {
        if(ctr[char]) ctr[char]++
        else ctr[char] = 1
    }
      
    for(let char of s2) {
        if(ctr[char]) ctr[char]--
        else ctr[char] = -1
    }
    
    // s1.split("").forEach( char => {
    //     if(ctr[char]) ctr[char]++
    //     else ctr[char] = 1
    // })
    
    // s2.split("").forEach( char => {
    //     if(ctr[char]) ctr[char]--
    //     else ctr[char] = -1
    // })
    
    return !Object.values(ctr).some( value => value !== 0)
};

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
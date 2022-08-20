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
  
    s1.split("").forEach( char => {
        if(ctr[char]) ctr[char]++
        else ctr[char] = 1
    })
    
    s2.split("").forEach( char => {
        if(ctr[char]) ctr[char]--
        else ctr[char] = -1
    })
    
    return !Object.values(ctr).some( value => value !== 0)
};
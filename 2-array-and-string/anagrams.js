// Time complexity: O(n)
// Space complexity: O(n) ?

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
    
    return !Object.values(ctr).some( value => value < 0)
};
  
module.exports = {
    anagrams,
};

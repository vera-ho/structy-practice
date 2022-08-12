// Time complexity: O(n)
// Space complexity: O(n) 

const mostFrequentChar = (s) => {
    let counter = {}
    let mostFrequent = s[0];
    
    for(let char of s) {
        if(counter[char]) counter[char]++
        else counter[char] = 1
    }
    
    for(let char of s) {
        if(counter[mostFrequent] < counter[char]) mostFrequent = char
    }
    
    return mostFrequent
};
  
// console.log(mostFrequentChar("hello"))
// console.log(mostFrequentChar("potato"))
  
module.exports = {
    mostFrequentChar,
};
  
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
    
    return mostFrequent;
};
  
// console.log(mostFrequentChar("hello"))
// console.log(mostFrequentChar("potato"))
  
// Time complexity: O(n) linear
// Space complexity: O(n) linear
const mostFrequentChar2 = (s) => {
    let counter = {}
    let maxChar = s[0];
    
    for(let char of s) {
        if(counter[char]) counter[char]++
        else counter[char] = 1
    }
     
    for(let char in counter) {
        if(counter[char] > counter[maxChar]) maxChar = char
    }
     
    return maxChar;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const mostFrequentChar3 = (s) => {
    let counter = {};
    
    // Loop through string and count occurrences of characters
    for(let char of s) {
        if(!counter[char]) counter[char] = 0;
        counter[char] += 1;
    }
    
    // Loop through string and compare counts of each char
    let mostChar = s[0];
    for(let char of s) {
        if(counter[char] > counter[mostChar]) mostChar = char;
    }
    
    return mostChar;
}

// Time complexity: O(n^2) quadratic/polynomial
// Space complexity: O(n^2) quadratic/polynomial
const maxPalinSubsequence = (str, start = 0, end = str.length - 1, lengths = {}) => {
    const place = start + " " + end;
    const strLength = end - start + 1;
  
    if(strLength === 0) return 0;
    if(strLength === 1) return 1;
    if(place in lengths) return lengths[place];
    
    let length = 0;
    if(str[start] === str[end]) {
        length = 2 + maxPalinSubsequence(str, start + 1, end - 1, lengths);
    } else {
        let first = maxPalinSubsequence(str, start + 1, end, lengths);
        let last = maxPalinSubsequence(str, start, end - 1, lengths);
        length = Math.max(first, last);
    }
    
    lengths[place] = length;
    return lengths[place];
};
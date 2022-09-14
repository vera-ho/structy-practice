// Time complexity: O(n^2) quadratic
// Space complexity: O(n^2) quadratic
const maxPalinSubsequence = (str, start = 0, end = str.length - 1, lengths = {}) => {
    const place = start + " " + end;
    if(start > end) return 0;
    if(start === end) return 1;
    if(place in lengths) return lengths[place];
    
    let length = 0;
    if(str[start] === str[end]) {
        lengths[place] = 2 + maxPalinSubsequence(str, start + 1, end - 1, lengths);
    } else {
        let first = maxPalinSubsequence(str, start + 1, end, lengths);
        let last = maxPalinSubsequence(str, start, end - 1, lengths);
        lengths[place] = Math.max(first, last);
    }
    
    return lengths[place];
};
// Time complexity: O(n * s) where n = length of words array and s = length of string
// Space complexity: O(s)
const canConcat = (s, words, tracker = {}) => {
    if(!s.length) return true;
    if(s in tracker) return tracker[s];
    
    for(let word of words) {
        if(s.startsWith(word)) {
            let remainder = s.slice(word.length);
            if(canConcat(remainder, words, tracker)) {
                tracker[s] = true;
                return true;
            }
        }
    }
    tracker[s] = false;
    return false;
};
// Time complexity: O(n^2)
// Space complexity: O(n)

const compress = (s) => {
    let result = "";
    let prev = curr = 0;
    
    while(curr <= s.length) {
        let count = curr - prev;
      
        if(s[prev] != s[curr]) {
            if(count > 1) {
                result += count + s[prev]     // nested O(n)
            } else {
                result += s[prev]
            }
      
            prev = curr;
        } else {
            curr++;
        } 
    }
    
    return result;
};
  
module.exports = {
    compress,
};
  
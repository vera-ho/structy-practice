// Time complexity: O(n)
// Space complexity: O(n)

const compress = (s) => {
    let result = [];
    let prev = curr = 0;
    
    while(curr <= s.length) {
        let count = curr - prev;
      
        if(s[prev] != s[curr]) {
            if(count > 1) {
            result.push(count, s[prev]);
            } else {
            result.push(s[prev]);
            }
        
            prev = curr;
        } else {
            curr++;
        }
    }
    
    return result.join("");
};
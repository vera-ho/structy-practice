// Time complexity: O(n)
// Space complexity: O(n)

const compress = (s) => {
    let result = "";
    let count = 0;
    let prevLetter = s[0];
    
    for(let i = 0; i <= s.length; i++) {
        let currLetter = s[i];
      
        if(prevLetter != currLetter) {
            if(count > 1) {
                result += count + prevLetter
            } else {
                result += prevLetter
            }
        
            prevLetter = currLetter;
            count = 1;
        } else {
            count++;
        }
    }
    
    return result;
};
  
module.exports = {
    compress,
};
  
// Time complexity: O(n x m)
// Space complexity: O(n)

const uncompress = (s) => {
    let uncompressed = "";  
    let i = j = 0;
    
    while(j < s.length) {
      
      if(!isLetter(s[j])) {
        j++;
      } else {
        let num = s.slice(i, j);
        let letter = s[j];
        
        for(let i = 0; i < num; i++) {
          uncompressed += letter;   // O(n) linear because JS strings are immutable and a whole new string is created
        }
        
        j++;
        i = j;
      }
    }
    
    return uncompressed;
  };
  
  const isLetter = char => {
    return char.length === 1 && (char.toUpperCase() != char.toLowerCase()) 
  }
  
  module.exports = {
    uncompress,
  };
  
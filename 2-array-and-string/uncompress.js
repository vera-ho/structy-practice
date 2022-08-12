// Time complexity: O(n x m)
// Space complexity: O(1)

const uncompress = (s) => {
    let uncompressed = [];  
    let i = j = 0;
    
    while(j < s.length) {
      
        if(!isLetter(s[j])) {
            j++;
        } else {
            let num = s.slice(i, j);
            let letter = s[j];
            
            for(let i = 0; i < num; i++) {
                uncompressed.push(letter);
            }
            
            j++;
            i = j;
        }
    }
    
    return uncompressed.join("");
};
  
const isLetter = char => {
    return char.length === 1 && (char.toUpperCase() != char.toLowerCase()) 
}

module.exports = {
    uncompress,
};
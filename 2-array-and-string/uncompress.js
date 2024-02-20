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




// ***********************************************
// approach 
// set up variable for final string
// track the current number value
// at first instance of a number, set number value
// subsequent instances of a number, add it to the number value (which are strings so just add it, no math)
// iterate the second index until it finds a letter
// we know to multiple the letter by num times - use .repeat()
// calculate the string and add to final string (concat)
// reset num to 0

// time complexity: O(n) linear since we go through the string of length n, once
// space complexity: O(num * letterCount) linear since num and uncompressed grow according to expanded value
const uncompress2 = (s) => {
  let uncompressed = '';
  let num = 0;
  
  for(let idx = 0; idx < s.length; idx++) {
    let char = s[idx];

    if (char >= 0) {
      num = num + char;
    } else {
      uncompressed = uncompressed + char.repeat(num)
      num = 0
    }
    
  }
  return uncompressed
};

// console.log('2t3b')
//   console.log(uncompress('2t3b'))

// console.log('3n12e2z')
//   console.log(uncompress('3n12e2z'))


module.exports = {
    uncompress,
    uncompress2
};
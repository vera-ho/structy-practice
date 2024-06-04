/** Approach
 *      - Count and track consecutive characters
 *      - If character changes, save count if > 1 and character, 
 *      - or just the char if count = 1
 *      - Count of consecutive characters is also the index of new char minus index of first of prev character
 *          - ffddddeejk
 *          - 0123456789
 *          - (6-2) = 4 consecutive d's    
 */

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

// time complexity: O(n) - runs through n characters in s
// space complexity: O(n) only need storage for max n characters in s (if each character shows up just once)
function compress2(s) {
  const compressed = [];
  let count = 0;
  
  for(let i = 0; i < s.length + 1; i++) {
    const curr = s[i];
    const prev = i > 0 ? s[i - 1] : s[i];
    
    if (curr === prev) {
      count++;
    } else if (count === 1) {
      compressed.push(prev);
    } else {
      compressed.push(...[count, prev]);
      count = 1;
    }
  }
  
  return compressed.join('');
}
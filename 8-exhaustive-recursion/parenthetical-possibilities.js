// Time complexity: O(m^n) exponential where m is the length of longest str in () and n is the number of () sets
// Space complexity: O(m^n) exponential
const parentheticalPossibilities = (s) => {
    if(!s.length) return [''];
    let possibilities = [];
    
    if(s[0] === "(") {
        let parenIndex = s.indexOf(')');
        let parenChars = s.slice(1, parenIndex);  // chars within ()
        let remainder = s.slice(parenIndex + 1);  // rest of the string after ()
        let partialPoss = parentheticalPossibilities(remainder);
        
        // Loop through char in () and substrings (partials), adding each char to substrings
        for(let i = 0; i < parenChars.length; i++) {
            for(let j = 0; j < partialPoss.length; j++) {
            possibilities.push(parenChars[i] + partialPoss[j]);
            }
        }
    } else { // s[0] was not an '('
        possibilities = parentheticalPossibilities(s.slice(1));
        
        for(let i = 0; i < possibilities.length; i++) {
            possibilities[i] = s[0] + possibilities[i];
        }
    }
    
    return possibilities;
};  


// Time complexity: O(m^n) exponential where m is the length of longest str in () and n is the number of () sets
// Space complexity: O(m^n) exponential
const parentheticalPossibilitiesCleaner = (s) => {
    if(!s.length) return [''];
    
    const { remainder, choices } = getChoices(s);
    const partialPoss = parentheticalPossibilities(remainder);
    let possibilities = [];
    
    for(let i = 0; i < choices.length; i++) {
        for(let j = 0; j < partialPoss.length; j++) {
            possibilities.push(choices[i] + partialPoss[j]);
        }
    }
    
    return possibilities;
};
  
const getChoices = s => {
    if(s[0] === '(') {
        let endParenIdx = s.indexOf(')');
        const choices = s.slice(1, endParenIdx).split('');
        const remainder = s.slice(endParenIdx + 1);
        
        return { remainder, choices };
    } else {
        const remainder = s.slice(1);
        const choices = [ s[0] ];
        
        return { remainder, choices }
    }
}
  
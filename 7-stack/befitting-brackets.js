// Time complexity: O(n) linear
// Space complexity: O(n) linear
const befittingBrackets = (str) => {
    const open = "({[";
    const close = ")}]";
    const stack = [];
    
    for(let char of str) {
        if(open.includes(char)) stack.push(char);
        else if(close.includes(char)) {
            let last = stack.length - 1;
            if( (stack[last] === "(" && char === ")") ||
                (stack[last] === "[" && char === "]") ||
                (stack[last] === "{" && char === "}") ) {
            stack.pop();
            } else return false;
        }
    }
    
    return stack.length === 0;
};    

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const befittingBracketsBetter = (str) => {
    const stack = [];
    const brackets = {
      '(' : ')',
      '[' : ']', 
      '{' : '}'
    };
    
    for(let char of str) {
        if(char in brackets) stack.push(brackets[char]);
        else {
            let last = stack.length - 1;
            if(stack[last] === char) stack.pop()
            else return false;
        }
    }
    
    return stack.length === 0;
};
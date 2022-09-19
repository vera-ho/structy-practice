// Time complexity: O(n) linear
// Space complexity: O(n) linear
const pairedParentheses = (str) => {
    const stack = [];
    
    for(let char of str) {
        if(char === "(") {
            stack.push("(");
        } else if(char === ")") {
            if(stack[stack.length - 1] === "(") stack.pop();
            else return false;
        }
    }
    
    if(!stack.length) return true;
    else return false;
};

// Time complexity: O(n) linear
// Space complexity: O(1) constant
const pairedParenthesesFaster = (str) => {
    let ctr = 0;
    
    for(let char of str) {
        if(ctr === -1) return false;
        if(char === "(") ctr++;
        if(char === ")") ctr--;
    }
    
    if(ctr === 0) return true;
    else return false;
};
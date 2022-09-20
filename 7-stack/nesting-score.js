// Time Complexity: O(n) linear
// Space Complexity: O(n) linear
const nestingScore = (str) => {
    const stack = [0];
    
    for(let char of str) {
        if(char === '[') stack.push(0);
        else {  // char is ']'
            let value = stack.pop();
            if(value === 0) {
                stack[stack.length - 1] += 1;
            } else if(value > 0) {
                stack[stack.length - 1] += value * 2;
            }
        }
    }
  
    return stack[0];
};

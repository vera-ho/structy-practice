// Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.
// You may assume the string contains only alphabetic characters, '(', or ')'.

// Approach
// Use a counter to track
// Add 1 for open parentheses | decrememnt 1 for close parentheses
// If counter goes negative at any time, the parentheses are not well formed
// At the end if the counter is not 0, the parentheses are not well formed

// Time complexity: O(n) linear
// Space comlexity: O(1) constant
const pairedParenthesesCtr = (str) => {
  let count = 0;
  for (let char of str) {
    if (char === '(') count++;
    if (char === ')') count--;
    if (count < 0) return false;
  }

  return count === 0;
};

// Approach
// Use a stack to track parentheses
// Push open parentheses onto the stack when an open parentheses is encountered
// Pop the open parentheses from the stack when a close parentheses is encountered
// Parentheses are well formed if the stack is empty at the end and there were no close parentheses while the stack is empty

// Time complexity: O(n) linear
// Space comlexity: O(n) linear
const pairedParenthesesStack = (str) => {
  let stack = [];
  for (let char of str) {
    if (char === '(') stack.push('(');
    if (char === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
};

// pairedParentheses("(david)((abby))"); // -> true  
// pairedParentheses("()rose(jeff"); // -> false
// pairedParentheses(")("); // -> false
// pairedParentheses("()"); // -> true
// pairedParentheses("(((potato())))"); // -> true
// pairedParentheses("(())(water)()"); // -> true
// pairedParentheses("(())(water()()"); // -> false
// pairedParentheses(""); // -> true
// pairedParentheses("))()"); // -> false
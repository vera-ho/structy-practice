// Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:
// [] is worth 1 point
// XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
// [S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
// You may assume that the input only contains well-formed square brackets.

// Approach
// XY -> meaning adjacent & [S] -> meaning nested
// Use a stack initialized with 0 in it (tracking score)
// Encounter open bracket -> push 0 onto the stack
// Encounter close bracket -> 
//   If the top value is 0: know it was an open bracket, so add 1 to the top value in the stack
//   If the top value > 0: know it's was a nested situation, so multiply by 2 and add to the value at the top of the stack

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const nestingScore = (str) => {
  const stack = [0];
  for (let char of str) {
    if (char === '[') stack.push(0);
    else {
      const num = stack.pop();
      if (num === 0) stack.push(stack.pop() + 1);
      else stack.push(stack.pop() + 2 * num);
    }
  }

  return stack.pop();
};

// nestingScore("[]"); // -> 1
// nestingScore("[][][]"); // -> 3
// nestingScore("[[]]"); // -> 2
// nestingScore("[[][]]"); // -> 4
// nestingScore("[[][][]]"); // -> 6
// nestingScore("[[][]][]"); // -> 5
// nestingScore("[][[][]][[]]"); // -> 7
// nestingScore("[[[[[[[][]]]]]]][]"); // -> 129
// nestingScore(""); // -> 0
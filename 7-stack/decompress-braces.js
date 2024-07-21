// Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.
// The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.
// You may assume that every number n is guaranteed to be an integer between 1 through 9.
// You may assume that the input is valid and the decompressed string will only contain alphabetic characters.

// Approach
// iterate through the string character by character and check if the character is a number, letter or brace
// if its a number or letter, push onto the stack
// if it's a closing brace:
//    pop the stack until there's a number (don't pop the number itself) and concat into one string
//    pop the number and repeat the string n times
//    push the string back onto the stack
// continue to iterate

// Time complexity: O(9^m * s) exponential, where m is the number of brace groups and s is the number of alphabetetical characters
// Space complexity: O(9^m * s) exponential
const decompressBraces = (s) => {
  const nums = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  const stack = [];

  for (let char of s) {
    if (char !== '{' && char !== '}') stack.push(char);
    else if (char === '}') {
      const str = createStr(stack, nums);
      stack.push(str.repeat(stack.pop()));
    }
  }

  return stack.join('');
};

// Pop items from the stack until we reach a number
const createStr = (stack, nums) => {
  let str = '';
  while (!nums.has(stack[stack.length - 1])) {
    str = stack.pop() + str;
  }
  return str;
}

// decompressBraces("2{q}3{tu}v"); 
// -> qqtututuv 
// decompressBraces("ch3{ao}"); 
// -> chaoaoao
// decompressBraces("2{y3{o}}s"); 
// -> yoooyooos
// decompressBraces("z3{a2{xy}b}"); 
// -> zaxyxybaxyxybaxyxyb 
// decompressBraces("2{3{r4{e}r}io}"); 
// -> reeeerreeeerreeeerioreeeerreeeerreeeerio 
// decompressBraces("go3{spinn2{ing}s}"); 
// -> gospinningingsspinningingsspinningings 
// decompressBraces("2{l2{if}azu}l"); 
// -> lififazulififazul 
// decompressBraces("3{al4{ec}2{icia}}"); 
// -> alececececiciaiciaalececececiciaiciaalececececiciaicia 
// Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.
// You may assume the string contains only characters: ( ) [ ] { }

// Approach:
// Use a stack to track brackets (push open ones, pop closed ones)
// Use an object to store bracket type pairs
// Iterate through each character of the string and push open brackets
// When encountering a close bracket, check if the top of the stack matches the close bracket

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const befittingBrackets = (str) => {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (let char of str) {
        if (char in brackets) stack.push(char);
        else {
            if (stack.length === 0) return false;
            const top = stack[stack.length - 1];
            if (char !== brackets[top]) return false;
            stack.pop();
        }
    }

    return stack.length === 0;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const befittingBracketsBetter = (str) => {
    const stack = [];
    const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
    }

    for (let char of str) {
        if (char in brackets) stack.push(brackets[char]);
        else {
            if (stack.length <= 0 || char !== stack[stack.length - 1]) return false;
            stack.pop();
        }
    }

  return stack.length === 0;
};

// befittingBrackets('(){}[](())'); // -> true
// befittingBrackets('({[]})'); // -> true
// befittingBrackets('[][}'); // -> false
// befittingBrackets('{[]}({}'); // -> false
// befittingBrackets('[]{}(}[]'); // -> false
// befittingBrackets('[]{}()[]'); // -> true
// befittingBrackets(']{}'); // -> false
// befittingBrackets(''); // -> true
// befittingBrackets('{[(}])'); // -> false 
// Write a function, reverseSomeChars, that takes in string and an array of characters. The function should return the string with the order of the given characters in reverse.

// Approach
// Turn char array into Set for constant lookup time
// Use a stack to reverse characters
// Iterate through the input string until a character is in the Set
//   Add the character to the stack
// Iterate through the input string again
//   Each time a character in the set is found, pop a character from the stack and replace it in the string
// Use an array to hold the result and join at the end

// Time complexity: O(n + m) linear
// Space complexity: O(n + m) linear
const reverseSomeChars = (str, chars) => {
    const charsToReverse = new Set(chars);
    const stack = [];
    const result = [];

    for (let char of str) {
        if (charsToReverse.has(char)) {
            stack.push(char);
        }
    }

    for (let char of str) {
        if (charsToReverse.has(char)) {
            result.push(stack.pop());
        } else {
            result.push(char);
        }
    }

    return result.join("");
};

// reverseSomeChars("computer", ["a", "e", "i", "o", "u"]); // -> 'cemputor'
// reverseSomeChars("skateboard", ["a", "e", "i", "o", "u"]); // -> 'skatobeard'
// reverseSomeChars("airplane", ["m", "n", "r"]); // -> 'ainplare'
// reverseSomeChars("building", ["g", "d", "i"]); // -> 'buglidni'

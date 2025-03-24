// Write a function, isPalindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.

// Approach
// Start with pointers at the beginning and end of the string
// Loop while start pointer < end pointer
// Each time, check that the characters are the same until while loop ends or a mismatch occurs

// Time complexity: O(n) linear
// Space complexity: O(1) constant
const isPalindrome = (s) => {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

// isPalindrome("pop"); // -> true
// isPalindrome("kayak"); // -> true
// isPalindrome("pops"); // -> false
// isPalindrome("boot"); // -> false
// isPalindrome("rotator"); // -> true
// isPalindrome("abcbca"); // -> false
// isPalindrome(""); // -> true

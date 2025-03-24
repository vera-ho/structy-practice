// Write a function, isSubsequence, that takes in string1 and string2. The function should return a boolean indicating whether or not string1 is a subsequence of string2.
// A subsequence is a string that can be formed by deleting 0 or more characters from another string.

// Approach
// Use two pointers to track position in each input string
// Iterate pointer for string1 only when it's character is found in string2
// Iterate through string2 looking for each character in string1
// A subsequence is found when the end of string1 is reached before or at the same time as string2

// Time complexity: O(n) linear to length of string2
// Space complexity: O(1) constant
const isSubsequence = (string1, string2) => {
    let index1 = 0;
    let index2 = 0;

    while (index1 < string1.length && index2 < string2.length) {
        const char1 = string1[index1];
        const char2 = string2[index2];

        if (char1 === char2) {
            index1++;
        }

        index2++;
    }

    return index1 >= string1.length;
};

isSubsequence("bde", "abcdef"); // -> true
isSubsequence("bda", "abcdef"); // -> false
isSubsequence("ser", "super"); // -> true
isSubsequence("serr", "super"); // -> false
isSubsequence("ama", "camera"); // -> true
isSubsequence("unfun", "unfortunate"); // -> true
isSubsequence("riverbed", "river"); // -> false
isSubsequence("river", "riverbed"); // -> true

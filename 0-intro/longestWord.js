// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.
// You can assume that the sentence is non-empty.

// Approach
// Split sentence into words and iterate over the array checking the length of each word
// Track longest word and update when a new one is found greater or equal in length

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const longestWord = (sentence) => {
    const words = sentence.split(" ");
    let longestWordFound = words[0];

    for (let word of words) {
        if (word.length >= longestWordFound.length) {
            longestWordFound = word;
        }
    }

    return longestWordFound;
};

// longestWord("what a wonderful world"); // -> 'wonderful'
// longestWord("have a nice day"); // -> 'nice'
// longestWord("the quick brown fox jumped over the lazy dog"); // -> 'jumped'
// longestWord("who did eat the ham"); // -> 'ham'
// longestWord("potato"); // -> 'potato'

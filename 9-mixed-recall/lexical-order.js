// Write a function, lexicalOrder, that takes in 2 words and an alphabet string as an argument. The function should return true if the first word should appear before the second word if lexically-ordered according to the given alphabet order. If the second word should appear first, then return false.
// Note that the alphabet string may be any arbitrary string.
// Intuitively, Lexical Order is like "dictionary" order:
// You can assume that all characters are lowercase a-z.
// You can assume that the alphabet contains all 26 letters.

// Approach
// Use two pointers to iterate though each word
// Compare each letter at the same index for each word and continue to iterate until the letters are not the same
// When differing letters are found, find the index of each letter in the alphabet
// If the first word's index in the alphabet is less than the seconds, then it would appear first in the dictionary
// Edge case for different length words - if the differing letter is a letter and an empty char, indexOf would return -1 for the shorter word

// Time complexity: O(n) linear - length of shortest word
// Space complexity: O(1) constant
const lexicalOrder = (word1, word2, alphabet) => {
  let index = 0;

  while (index <= word1.length && index <= word2.length) {
    const char1 = word1[index];
    const char2 = word2[index];

    if (char1 !== char2) {
      const alpha1 = alphabet.indexOf(char1);
      const alpha2 = alphabet.indexOf(char2);
      return alpha1 <= alpha2;
    }
    
    index++;
  }

  return true;
};

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// lexicalOrder("apple", "dock", alphabet); // -> true

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// lexicalOrder("apple", "ample", alphabet); // -> false

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// lexicalOrder("app", "application", alphabet); // -> true

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// lexicalOrder("backs", "backdoor", alphabet); // -> false

// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// lexicalOrder("zoo", "dinner", alphabet); // -> true

// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// lexicalOrder("leaper", "leap", alphabet); // -> false

// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// lexicalOrder("backs", "backdoor", alphabet); // -> true

// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// lexicalOrder("semper", "semper", alphabet); // -> true
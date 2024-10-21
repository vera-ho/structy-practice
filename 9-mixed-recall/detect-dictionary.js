// Write a function, detectDictionary, that takes in a dictionary of words and an alphabet string. The function should return a boolean indicating whether or not all words of the dictionary are lexically-ordered according to the alphabet.
// You can assume that all characters are lowercase a-z.
// You can assume that the alphabet contains all 26 letters.

// Approach
// Reuse lexical order 
// Iterate through words in the dictionary and use lexicalOrder to check pairs are in the correct order
// If any of the pairs are not in order, then the dictionary is not lexically ordered

// Time complexity: O(n * k) linear
// Space complexity: O(1) constant
const detectDictionary = (dictionary, alphabet) => {
  for (let i = 0; i < dictionary.length - 1; i++) {
    const word1 = dictionary[i];
    const word2 = dictionary[i + 1];
    const inOrder = lexicalOrder(word1, word2, alphabet);
    if (!inOrder) { 
      return false;
    }
  }

  return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
  const length = Math.min(word1.length, word2.length);

  for (let i = 0; i <= length; i++) {
    const alpha1 = alphabet.indexOf(word1[i]);
    const alpha2 = alphabet.indexOf(word2[i]);
    if (word1[i] !== word2[i]) {
      return alpha1 < alpha2;
    }
  }

  return true;
}

// const dictionary = ["zoo", "tick", "tack", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// detectDictionary(dictionary, alphabet); // -> true

// const dictionary = ["zoo", "tack", "tick", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// detectDictionary(dictionary, alphabet); // -> false

// const dictionary = ["zoos", "zoo", "tick", "tack", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// detectDictionary(dictionary, alphabet); // -> false

// const dictionary = ["miles", "milestone", "proper", "process", "goal"];
// const alphabet = "mnoijpqrshkltabcdefguvwzxy";
// detectDictionary(dictionary, alphabet); // -> true

// const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal"];
// const alphabet = "mnoijpqrshkltabcdefguvwzxy";
// detectDictionary(dictionary, alphabet); // -> true

// const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal", "apple"];
// const alphabet = "mnoijpqrshkltabcdefguvwzxy";
// detectDictionary(dictionary, alphabet); // -> false

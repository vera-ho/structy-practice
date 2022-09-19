// Time complexity: O(s x w)
// Space complexity: O(s)
const quickestConcat = (s, words) => {
    let minWords = concatCounter(s, words);
    return minWords === Infinity ? -1 : minWords;
};
  
  const concatCounter = (s, words, dictionary = {}) => {
    if(!s.length) return 0;
    if(s in dictionary) return dictionary[s];
  
    let minWords = Infinity;
    for(let word of words) {
        if(s.startsWith(word)) {
            let wordCt = concatCounter(s.slice(word.length), words, dictionary);
            minWords = Math.min(minWords, wordCt + 1);
        }
    }
  
    dictionary[s] = minWords;
    return dictionary[s];
}
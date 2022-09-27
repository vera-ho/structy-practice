// Time complexity: O(m^n) exponential 
//    where m is max synonyms for a word and n is # of words in sentence
// Space complexity: O(m^n) exponential 
const substituteSynonyms = (sentence, synonyms) => {
    if(!sentence.length) return [''];
    
    const words = sentence.split(' ');
    const remainder = words.slice(1).join(' ');
    const options = getOptions(words, synonyms);
    const partials = substituteSynonyms(remainder, synonyms);
    const possibilities = [];
    
    for(let prefix of options) {
        for(let suffix of partials) {
            if(suffix.length) possibilities.push(prefix + ' ' + suffix);
            else possibilities.push(prefix);
        }
    }
    
    return possibilities;
};

const getOptions = (words, synonyms) => {
    let options = [];
    if(synonyms[words[0]]) {
        options = synonyms[words[0]];
    } else { // word does not have synonyms
        options.push(words[0]);
    }
    
    return options;
}
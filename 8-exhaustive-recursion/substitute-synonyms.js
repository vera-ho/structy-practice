// Write a function, substitutingSynonyms, that takes in a sentence and an object as arguments. The object contains words as keys whose values are arrays containing synonyms. The function should return an array containing all possible sentences that can be formed by substituting words of the sentence with their synonyms.
// You may return the possible sentences in any order, as long as you return all of them.

// Approach:
// Break the string up into words in an array and check if each word is a key in the synonyms object
// Call the remainder using substituteSynonyms
// If the first word is a key in the synonyms, add first word back to the possibile sentences
// If not, loop through each synonym and add it to each possible sentence
// Rejoin arrays into sentences

// Time complexity: O(w^s) exponential where w is the number of words with synonyms and s is the max synonyms for a word
// Space complexity: O(w^s) exponential
const substituteSynonyms = (sentence, synonyms) => {
  const words = sentence.split(' ');
  return _subSyn(words, synonyms).map(poss => poss.join(' '));
};

const _subSyn = (words, synonyms) => {
  if (words.length === 0) return [[]];
  
  const first = words[0];
  const options = first in synonyms ? synonyms[first] : [first];
  const possibilities = [];

  for (let option of options) {
    for (let sub of _subSyn(words.slice(1), synonyms)) {
      possibilities.push([option, ...sub])
    }
  }
  
  return possibilities;
}

//*************************************************************/
// const sentence = "follow the yellow brick road";
// const synonyms = {
//   follow: ["chase", "pursue"],
//   yellow: ["gold", "amber", "lemon"],
// };

// substituteSynonyms(sentence, synonyms);
// [
//   'chase the gold brick road',
//   'chase the amber brick road',
//   'chase the lemon brick road',
//   'pursue the gold brick road',
//   'pursue the amber brick road',
//   'pursue the lemon brick road'
// ]

//*************************************************************/
// const sentence = "I think it's gonna be a long long time";
// const synonyms = {
//   think: ["believe", "reckon"],
//   long: ["lengthy", "prolonged"],
// };

// substituteSynonyms(sentence, synonyms);
// [
//   "I believe it's gonna be a lengthy lengthy time",
//   "I believe it's gonna be a lengthy prolonged time",
//   "I believe it's gonna be a prolonged lengthy time",
//   "I believe it's gonna be a prolonged prolonged time",
//   "I reckon it's gonna be a lengthy lengthy time",
//   "I reckon it's gonna be a lengthy prolonged time",
//   "I reckon it's gonna be a prolonged lengthy time",
//   "I reckon it's gonna be a prolonged prolonged time"
// ]

//*************************************************************/
// const sentence = "palms sweaty knees weak arms heavy";
// const synonyms = {
//   palms: ["hands", "fists"],
//   heavy: ["weighty", "hefty", "burdensome"],
//   weak: ["fragile", "feeble", "frail", "sickly"],
// };

// substituteSynonyms(sentence, synonyms);
// [
//   'hands sweaty knees fragile arms weighty',
//   'hands sweaty knees fragile arms hefty',
//   'hands sweaty knees fragile arms burdensome',
//   'hands sweaty knees feeble arms weighty',
//   'hands sweaty knees feeble arms hefty',
//   'hands sweaty knees feeble arms burdensome',
//   'hands sweaty knees frail arms weighty',
//   'hands sweaty knees frail arms hefty',
//   'hands sweaty knees frail arms burdensome',
//   'hands sweaty knees sickly arms weighty',
//   'hands sweaty knees sickly arms hefty',
//   'hands sweaty knees sickly arms burdensome',
//   'fists sweaty knees fragile arms weighty',
//   'fists sweaty knees fragile arms hefty',
//   'fists sweaty knees fragile arms burdensome',
//   'fists sweaty knees feeble arms weighty',
//   'fists sweaty knees feeble arms hefty',
//   'fists sweaty knees feeble arms burdensome',
//   'fists sweaty knees frail arms weighty',
//   'fists sweaty knees frail arms hefty',
//   'fists sweaty knees frail arms burdensome',
//   'fists sweaty knees sickly arms weighty',
//   'fists sweaty knees sickly arms hefty',
//   'fists sweaty knees sickly arms burdensome'
// ]

function LetterCount(str) { 
    let maxCount = -1;
    let maxCountWord = "";
  
    let words = str.split(" ");
    for(let word of words) {
        let count = mostRepeatedLetters(word);
        if(count > maxCount) {
            maxCountWord = word;
            maxCount = count;
        }
    }
  
    return maxCount > -1 ? maxCountWord : maxCount; 
}

function mostRepeatedLetters(word) {
    let ctr = {};
    let maxCount = -1;
  
    for(let char of word) {
        if(!ctr[char]) ctr[char] = 0;
        ctr[char] += 1;
    }
  
    for(let char in ctr) {
        if(maxCount < ctr[char]) maxCount = ctr[char];
    }
   
    if(maxCount === 1) maxCount = -1;
    return maxCount;
}
// Time complexity: O(n * m) where n and m are lengths of str1 and str2
// Space complexity: O(n * m)
const overlapSubsequence = (str1, str2, i1 = 0, i2 = 0, matches = {}) => {
    const key = i1 + " " + i2;
    if(i1 >= str1.length || i2 >= str2.length) return 0;
    if(key in matches) return matches[key];
    
    if(str1[i1] === str2[i2]) {
        matches[key] = 1 + overlapSubsequence(str1, str2, i1 + 1, i2 + 1, matches);
    } else {
        let nextStr1 = overlapSubsequence(str1, str2, i1 + 1, i2, matches);
        let nextStr2 = overlapSubsequence(str1, str2, i1, i2 + 1, matches);
        matches[key] = Math.max(nextStr1, nextStr2);
    }
    
    return matches[key];
};
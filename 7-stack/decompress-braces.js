// Time Complexity: O(9^m x s) exponential
// Space Complexity: O(9^m x s) exponential
const decompressBraces = (s) => {
    const stack = [];
    let decompressed = '';
    
    for(let char of s) {
        if(char === '}') {
            let substring = _decompress(stack);
            stack.push(substring);
        } else if(char !== '{') {
            stack.push(char);
        }
    }
    
    while(stack.length) {
        let substring = stack.pop();
        decompressed = substring + decompressed;
    }
    
    return decompressed;  
};

const _decompress = (stack) => {
    let numbers = '0123456789';
    let substring = '';
    let multiplier = 1;
    
    while(multiplier === 1) {
        let char = stack.pop();
        if(numbers.includes(char)) multiplier = Number(char);
        else substring = char + substring;
    }
    
    substring = substring.repeat(multiplier);
    return substring;
}
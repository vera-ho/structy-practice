// Time complexity: O(a x c)
// Space complexity: O(a x c)
const countingChange = (amount, coins, index = 0, ways = {}) => {
    const key = amount + " " + index;
    if(amount === 0) return 1;
    if(amount < 0 || index === coins.length) return 0;
    if(key in ways) return ways[key];
    
    let coin = coins[index];
    let ctr = 0;
    for(let i = 0; i <= amount/coin; i++) {
        ctr += countingChange(amount - coin * i, coins, index + 1, ways);
    }
    
    ways[key] = ctr;
    return ctr;
};
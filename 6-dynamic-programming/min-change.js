// a = amount; c = coins length
// Time complexity: O(a x c)
// Space complexity: O(a) linear
const minChange = (amount, coins, coinPurse = {}) => {
    if(amount === 0) return 0;
    if(amount < 0) return -1;
    if(amount in coinPurse) return coinPurse[amount];
    
    let minCoin = Infinity;  
    for(let coin of coins) {
        let numCoins = minChange(amount - coin, coins, coinPurse);
        if(numCoins > -1 && numCoins < minCoin) {
            minCoin = numCoins;
            coinPurse[amount] = numCoins + 1;
        } 
    }
    
    if(!(amount in coinPurse)) coinPurse[amount] = -1;
    return coinPurse[amount];
};
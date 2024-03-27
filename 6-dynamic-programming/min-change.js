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

// Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.
// If it is not possible to create the amount, then return -1.

// Approach: 
// Base case amount = 0 -> 0 levels
// Base case amount < 0 returns -1 for not possible
// Each level above that can add 1 to level count
// Use memo to store number of levels to get to 0
// For each amount, iterate through the coins and subtract the value; run minChange on new value
// Save results to memo

// TC: linear O(a * c)
// SC: linear O(a) 
const minChange2 = (amount, coins, memo = {}) => {
  if (amount < 0) return -1;
  if (amount === 0) return 0;
  if (amount in memo) return memo[amount];
  
  memo[amount] = Infinity;
  for (const value of coins) {
    const levels = minChange(amount - value, coins, memo);
    if (levels === -1) continue;
    if (levels < memo[amount]) memo[amount] = levels + 1;
  }

  // if the result was never set to something other than infinity, then it was not possible for this amount
  memo[amount] = memo[amount] === Infinity ? -1 : memo[amount];
  return memo[amount]
};

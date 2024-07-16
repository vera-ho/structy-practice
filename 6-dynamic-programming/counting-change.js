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


/************************************************** */
// Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.
// You may reuse a coin as many times as necessary.
// For example,
// countingChange(4, [1,2,3]) -> 4
// There are four different ways to make an amount of 4:
// 1. 1 + 1 + 1 + 1
// 2. 1 + 1 + 2
// 3. 1 + 3
// 4. 2 + 2

// Approach:
// For each coin value, test using x number of coins from 0 to max
// Paths that result in a value of 0 are valid
// Track place in coins array using an index
// Track calculated values using memo object

// TC: O(a * c) where a is width of tree and c (# of coins) is height of the tree
// SC: O(a * c)
const countingChange2 = (amount, coins, idx = 0, memo = {}) => {
  const key = amount + ' ' + idx;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  if (amount < 0 || idx === coins.length) return 0;

  const coin = coins[idx];
  let coinCount = 0; 
  let waysCount = 0;
  
  while (amount - (coinCount * coin) >= 0) {
    waysCount += countingChange(amount - (coinCount * coin), coins, idx + 1, memo);
    coinCount++;
  }

  memo[key] = waysCount;
  return waysCount;
};

// countingChange(4, [1, 2, 3]); // -> 4
// countingChange(8, [1, 2, 3]); // -> 10
// countingChange(24, [5, 7, 3]); // -> 5
// countingChange(13, [2, 6, 12, 10]); // -> 0
// countingChange(512, [1, 5, 10, 25]); // -> 20119
// countingChange(1000, [1, 5, 10, 25]); // -> 142511
// countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // -> 1525987916

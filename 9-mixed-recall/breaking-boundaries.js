// Write a function, breakingBoundaries, that takes in 5 arguments: a number of rows (m), a number of columns (n), a number of moves (k), a starting row (r), and a starting column (c). Say you were situated in a grid with dimensions m * n. If you had to start at position (r,c), in how many different ways could you move out of bounds if you could take at most k moves. A single move is moving one space up, down, left, or right. During a path you may revisit a position.

// For example:
// Given m, n, k, r, c:
// 3, 4, 2, 0, 0
// This input asks us to count the numbers of ways
// to move out of bounds in a 3 by 4 grid, starting at
// position (0, 0) if we could take at most 2 moves.

// The answer is 4 because of these 4 distinct ways:
//  1. left
//  2. up
//  3. right, up
//  4. down, left

// Approach - dynamic programming
// Track the position and moves left as key in memo with count as value
// Add 1 to count when a valid move takes position out of bounds
// Don't add to count if there are no more moves and position is in-bounds
// While k > 0, check the next 4 positions (up, down, left, right), decrementing k by 1
// Take results from the 4 directions and return their sum

// Time complexity: O(m * n * k) multilinear - max combos that can be memoized
// Space complexity: O(m * n * k)
const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
  const key = r + ' ' + c + ' ' + k;
  if (key in memo) return memo[key];

  // Check bounds and moves remaining
  if (r < 0 || c < 0 || r >= m || c >= n) return 1;
  if (k === 0) return 0;

  const up = breakingBoundaries(m, n, k - 1, r - 1, c, memo);
  const down = breakingBoundaries(m, n, k - 1, r + 1, c, memo);
  const left = breakingBoundaries(m, n, k - 1, r, c - 1, memo);
  const right = breakingBoundaries(m, n, k - 1, r, c + 1, memo);

  memo[key] = up + down + left + right;
  return memo[key];
};

// breakingBoundaries(3, 4, 2, 0, 0); // -> 4
// breakingBoundaries(2, 2, 2, 1, 1); // -> 6
// breakingBoundaries(3, 4, 3, 0, 0); // -> 11
// breakingBoundaries(4, 4, 5, 2, 1); // -> 160
// breakingBoundaries(5, 6, 9, 2, 5); // -> 11635
// breakingBoundaries(6, 6, 12, 3, 4); // -> 871065
// breakingBoundaries(6, 6, 15, 3, 4); // -> 40787896
// breakingBoundaries(6, 8, 16, 2, 1); // -> 137495089

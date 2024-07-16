// A knight is on a chess board. Can you figure out the total number of ways the knight can move to a target position in exactly m moves? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.
// https://structy-static.s3.amazonaws.com/knight-movement.png

// Write a function, knightlyNumber, that takes in 6 arguments:
// n, m, kr, kc, pr, pc
// n = the length of the chess board
// m = the number of moves that must be used
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the target row
// pc = the target column
// The function should return the number of different ways the knight can move to the target in exactly m moves. The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7.

// Approach
// Use recursion to find knight's possible paths from starting position until there are no more moves
// If no moves are left, check if the ending position matches the target position
// Return 1 if knight stops at target, or 0 if knight doens't stop at target
// Store moves left - row - col in memo

// tc: O(m * n^2) - total possibile triplets in marker
// sc: O(m * n^2)
const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  const marker = m + ' ' + kr + ' ' + kc;
  if (marker in memo) return memo[marker];
  if (m === 0) {
    if (kr === pr && kc === pc) return 1;
    else return 0;
  }

  const nextPositions = getNextPositions(n, kr, kc);
  // console.log('next positions: ', nextPositions)

  let count = 0;
  for (let position of nextPositions) {
    const [nextX, nextY] = position;
    const movesLeft = m - 1;
    const nextMarker = movesLeft + ' ' + nextX + ' ' + nextY;
    count += knightlyNumber(n, movesLeft, nextX, nextY, pr, pc, memo);
  }

  memo[marker] = count;
  return count;
};

const getNextPositions = (n, row, col) => {
  const directions = [
    [-2, +1], [-1, +2],
    [+1, +2], [+2, +1],
    [-2, -1], [-1, -2],
    [+1, -2], [+2, -1],
  ]
  const nextPositions = [];
  
  for (let direction of directions) {
    const [x, y] = direction;
    const nextX = row + x;
    const nextY = col + y;

    // Check if position is in bounds of the chess board
    if (nextX < 0 || nextX >= n) continue;
    if (nextY < 0 || nextY >= n) continue;

    nextPositions.push([nextX, nextY]);
  }

  return nextPositions;
}

// knightlyNumber(8, 2, 4, 4, 5, 5); // -> 2
// knightlyNumber(8, 2, 7, 1, 7, 1); // -> 3
// knightlyNumber(8, 2, 5, 4, 5, 4); // -> 8
// knightlyNumber(8, 3, 5, 2, 4, 4); // -> 21
// knightlyNumber(20, 6, 18, 7, 10, 15); // -> 60
// knightlyNumber(20, 12, 8, 3, 9, 14); // -> 98410127
// knightlyNumber(8, 2, 0, 0, 1, 1); // -> 0

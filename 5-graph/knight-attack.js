// A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

// Write a function, knightAttack, that takes in 5 arguments:

// n, kr, kc, pr, pc

// n = the length of the chess board
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the row of the pawn
// pc = the column of the pawn
// The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.

// Approach
// Use BFS to find closest move to get to the pawn
// Track move count with knight position
// Track positions in queue so we don't try checking repeats

// tc: quadratic O(n^2) for the grid size
// sc: quadratic O(n^2) 
const knightAttack = (n, kr, kc, pr, pc) => {
  const visited = new Set();
  const queue = [[kr, kc, 0]];
  visited.add(kr + ' ' + kc);

  while(queue.length) {
    const [row, col, moveCount] = queue.shift();
    if (row === pr && col === pc) return moveCount;
    const nextPositions = getNextPositions(n, row, col);

    for(const nextPosition of nextPositions) {
      const [nextX, nextY] = nextPosition;
      if(!visited.has(nextX + ' ' + nextY)) {
        queue.push([nextX, nextY, moveCount + 1]);
        visited.add(nextX + ' ' + nextY);   
      }
    }
  }

  return null;
};

// For each possible direction of a knights movement, save all coordinates that are in-bounds for the grid
// tc: linear O(d)
// sc: linear O(d)
const getNextPositions = (n, row, col) => {
  const directions = [
    [-2, +1], [-1, +2],
    [+1, +2], [+2, +1],
    [-2, -1], [-1, -2],
    [+1, -2], [+2, -1],
  ]

  const nextPositions = [];
  
  for(const direction of directions) {
    const [dirX, dirY] = direction;
    const nextX = row + dirX;
    const nextY = col + dirY;

    if (nextX >= n || nextX < 0) continue;
    if (nextY >= n || nextY < 0) continue;
    nextPositions.push([nextX, nextY]);  
  }
  
  return nextPositions;
}


// Time complexity: O(n x m) linear
// Space complexity: O(n x m) linear
const closestCarrot = (grid, startRow, startCol) => {
    const directions = [ [0, 1], [1, 0], [0, -1], [-1, 0] ];
    const visited = new Set([startRow + " " + startCol]);
    const queue = [ [startRow, startCol, 0] ];
    
    while(queue.length) {
        const [row, col, steps] = queue.shift();        
        if(grid[row][col] === 'C') return steps;
        
        for(let i = 0; i < directions.length; i++) {
            let [x, y] = directions[i];
            let nextRow = row + x;
            let nextCol = col + y;
            let nextPos = nextRow + " " + nextCol;

            if(nextRow < 0 || nextRow >= grid.length || nextCol < 0 || 
               nextCol >= grid[0].length || visited.has(nextPos)) {
                continue; 
            }
            
            if(grid[nextRow][nextCol] !== 'X') {
                queue.push([nextRow, nextCol, steps + 1]);
                visited.add(nextPos);
            }
        }
    }
    
    return -1;
};
  

// ------------------------------------------------------------------------- //

// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.

// Approach: 
// Use BFS to find something closest to the starting point
// Starting at the given [row, col], find neighbors that are not walls
// Complexity: both are linear O(r * c)
const closestCarrot2 = (grid, startRow, startCol) => {
  const visited = new Set();
  const queue = [[[startRow, startCol], 0]]; // [pos, distance]
  
  while(queue.length) {
    const [position, distance] = queue.shift();
    const [row, col] = position;
    
    if (grid[row][col] === "C") return distance;
    if (visited.has(row + ' ' + col)) continue;
    else visited.add(row + ' ' + col);
    
    const neighbors = getNeighbors(grid, row, col);
    for (let neighbor of neighbors) {
      const [nextRow, nextCol] = neighbor;
      if (grid[nextRow][nextCol] === "O" || grid[nextRow][nextCol] === 'C') {
        queue.push([neighbor, distance + 1])        
      }
    }
  }
  
  return -1;
};

// Possible directions from a cell (up down left right)
const directions = [
  [0, +1], // right
  [0, -1], // left
  [+1, 0], // up
  [-1, 0]  // down
];

// Return 2D array of in-grid coordinates for current land position (helper)
// Does not check if neighbor is land or water
const getNeighbors = (grid, row, col) => {
  const neighbors = [];

  for (const direction of directions) {
    const [x, y] = direction;
    const nextCoord = [row + x, col + y];
    
    // Check grid bounds
    const rowMax = grid.length;
    const colMax = grid[0].length;
    if (nextCoord[0] < rowMax && nextCoord[0] >=0 && nextCoord[1] < colMax && nextCoord[1] >=0) {
      neighbors.push(nextCoord)
    }
  }
  
  return neighbors;
};

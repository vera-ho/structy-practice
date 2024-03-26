// Time complexity: O(n * m) linear
// Space complexity: O(n * m) linear
const islandCount = (grid) => {
    let visited = new Set();
    let count = 0;
  
    for(let row = 0; row < grid.length; row++) {          // row index
        for(let col = 0; col < grid[row].length; col++) {   // col index
            let pos = row + ", " + col;
            if(visited.has(pos)) continue;
            if(grid[row][col] === 'W') visited.add(pos);
            else {
                exploreIsland(grid, row, col, visited);
                count += 1;
            }
        }
    }
    
    return count;
};
  
const exploreIsland = (grid, row, col, visited) => {
    let pos = row + ", " + col;
    const directions = [
        [-1, 0],
        [0, -1],
        [1, 0], 
        [0, 1]
    ];
    
    if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
    if(visited.has(pos)) return;
    if(grid[row][col] === 'W') return;
    visited.add(pos);

    for(let i = 0; i < directions.length; i++) {
        let newRow = row + directions[i][0];
        let newCol = col + directions[i][1];
        exploreIsland(grid, newRow, newCol, visited);
    }
};

// ------------------------------------------------------------------------- //
// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

// Approach: 
// Track visited using a Set
// "neighbors" are +/- 1 from row or column
// Iterate though 2D array until land is found (that hasnt been previously visited)
// Traverse island until all of it has been visited and there is nothing left to traverse
// Add to island count and continue to iterate though 2D array

// Time complexity: O(row * col)
// Space complexity: O(row * col)
const islandCount2 = (grid) => {
  const visited = new Set();
  let count = 0;
  
  // iterate through the grid, cell by cell
  for(let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // start island traversal if location is land and not previously visited
      if(grid[row][col] === "L" && !visited.has(row + 'x' + col)) {
        // expore the island to add mapping to visited
        exploreIsland(grid, row, col, visited);
        count++;
      }
    }
  }
  
  return count;
};

// Possible directions from a cell (up down left right)
const directions = [
  [0, +1], // right
  [0, -1], // left
  [+1, 0], // up
  [-1, 0]  // down
]

// Return 2D array of in-grid coordinates for current land position
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
}

// Recursively traverse the island
const exploreIsland2 = (grid, row, col, visited) => {
  if (visited.has(row + 'x' + col)) return;
  if (grid[row][col] === "W") return;
  
  // map the current land position
  visited.add(row + 'x' + col);
  const neighbors = getNeighbors(grid, row, col);
  
  for (const coordinates of neighbors) {
    const [nextRow, nextCol] = coordinates;
    
    // continue to explore unmapped land
    if (!visited.has(nextRow + 'x' + nextCol)) {
      exploreIsland(grid, nextRow, nextCol, visited);
    }
  }
};
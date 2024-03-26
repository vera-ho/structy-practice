// Time complexity: O(n x m) linear
// Space complexity: O(n x m) linear
const minimumIsland = (grid) => {
    const visited = new Set();
    let minSize = Infinity;
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            let pos = row + " " + col;
            if(grid[row][col] === 'L' && !visited.has(pos)) {
                let size = exploreIsland(grid, row, col, visited);
                if(size < minSize) minSize = size;
            }
        }
    }
    
    return minSize;
};
  
const exploreIsland = (grid, row, col, visited) => {
    if(row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) return 0;
    if(grid[row][col] === 'W') return 0;
    
    let pos = row + " " + col;
    if(visited.has(pos)) return 0;
    visited.add(pos);
    
    let size = 1;
    let directions = [
        [0, 1],
        [1, 0], 
        [0, -1], 
        [-1, 0]
    ]
    
    for(let i = 0; i < directions.length; i++) {
        let newRow = row + directions[i][0];
        let newCol = col + directions[i][1];
        size += exploreIsland(grid, newRow, newCol, visited);
    }
    
    return size;
}

// ------------------------------------------------------------------------- //

// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.
// You may assume that the grid contains at least one island.

// Approach: 
// Iterate though grid and look for land. Traverse through the island and count how many L's are found
// Track visited L & W with a Set
// Compare each island size with the smallest found (so far) and update if its smaller

// Time and space complexity: Linear O(r * c)
const minimumIsland2 = (grid) => {
  const visited = new Set();
  let smallestIsland = Infinity;
  
  // Iterate through the grid and traverse each island. Compare island sizes and save smallest island size each time
  for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "W") {
        visited.add(row + ' ' + col);
        continue;
      }
      
      // Unmapped land is found so explore and compare sizes
      if (!visited.has(row + ' ' + col) && grid[row][col] === "L") {
        const islandSize = exploreIsland(grid, row, col, visited);
        if (islandSize < smallestIsland) smallestIsland = islandSize;
      }
    }
  }
  
  return smallestIsland;
};

// Previously visited or water contribute 0 to island size
const exploreIsland2 = (grid, row, col, visited) => {
  // Recursive
  if (visited.has(row + ' ' + col)) return 0;
  visited.add(row + ' ' + col);
  if (grid[row][col] === "W") return 0;
  
  const neighbors = getNeighbors(grid, row, col);
  let size = 1; // including self
  
  for (let neighbor of neighbors) {
    const [nextRow, nextCol] = neighbor;
    size += exploreIsland(grid, nextRow, nextCol, visited);
  }
  
  return size;
  
//   // Iterative - messier Set management
//   if (visited.has(row + ' ' + col)) return;
//   if (grid[row][col] === "W") return;
  
//   const stack = [[row, col]];
//   let size = 0;
  
//   while (stack.length) {
//     const [row, col] = stack.pop();
//     const neighbors = getNeighbors(grid, row, col);
//     if (visited.has(row + ' ' + col)) continue;
//     else visited.add(row + ' ' + col);
//     size++;
    
//     for (let neighbor of neighbors) {
//       const [nextRow, nextCol] = neighbor;
//       if (grid[nextRow][nextCol] === "L") {
//         stack.push(neighbor);
//       }
//     }
//   }
  
//   return size;
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
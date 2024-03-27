// Time complexity: O(n x m) linear
// Space complexity: O(n x m) linear
const bestBridge = (grid) => {
    const visited = new Set();
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            let pos = row + " " + col;
          
            if(grid[row][col] === 'L' && !visited.has(pos)) {
                visited.add(pos);

                let islandMap = traverseIsland(grid, row, col, visited);
                let bridgeLength = findShortestBridge(grid, islandMap, visited);
                return bridgeLength;
            }
        }
    }
};

const findShortestBridge = (grid, map, visited) => {
    const dirs = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
    const queue = map;
    
    while(queue.length) {
        let [row, col, steps] = queue.shift();
        if(grid[row][col] === 'L' && steps) return steps - 1;
        
        for(let dir of dirs) {
            let [dr, dc] = dir;
            let [nextRow, nextCol] = [row + dr, col + dc];
            let nextPos = nextRow + " " + nextCol;

            if(inBounds(nextRow, nextCol, grid) && !visited.has(nextPos)) {
                queue.push([nextRow, nextCol, steps + 1]);
                visited.add(nextPos);
            }
        } 
    }
};

const traverseIsland = (grid, row, col, visited) => {
    const dirs = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
    const queue = [ [row, col] ];
    const island = [ [row, col, 0] ];
    
    while(queue.length) {
        let [row, col] = queue.shift();
      
        for(let dir of dirs) {
            let [dr, dc] = dir;
            let [nextRow, nextCol] = [row + dr, col + dc];
            let nextPos = nextRow + " " + nextCol;

            if(inBounds(nextRow, nextCol, grid) && grid[nextRow][nextCol] === 'L' && !visited.has(nextPos)) {
                visited.add(nextPos);
                queue.push([nextRow, nextCol]);
                island.push([nextRow, nextCol, 0]);
            }
        }
    }
    
    return island;
};

const inBounds = (row, col, grid) => {
    const inBoundsRow = row >= 0 && row < grid.length;
    const inBoundsCol = col >= 0 && col < grid[0].length;
    return inBoundsRow && inBoundsCol;
};

// ********************************************************* //
// Time complexity: O(n x m) linear
// Space complexity: O(n x m) linear
const bestBridgeRecursive = (grid) => {
    const visited = new Set();
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            let pos = row + " " + col;
          
            if(grid[row][col] === 'L' && !visited.has(pos)) {
                let islandMap = mapIslandRecursively(grid, row, col, visited, [[row, col, 0]]);
                let bridgeLength = findShortestBridge(grid, islandMap, visited);
                return bridgeLength;
            }
        }
    }
};

const mapIslandRecursively = (grid, row, col, visited, map) => {
    if(!inBounds(row, col, grid) || grid[row][col] === 'W' || visited.has(row + ' ' + col)) return map;
    visited.add(row + ' ' + col);
    map.push( [row, col, 0] );
    
    const dirs = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
    for(let directions of dirs) {
        let [dRow, dCol] = directions;
        let [nextRow, nextCol] = [row + dRow, col + dCol];
        mapIslandRecursively(grid, nextRow, nextCol, visited, map);
    }
    return map;
};


// ------------------------------------------------------------------------- //

// Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.

// Approach: 
// Find an island and map the entire island's coordinates
// BFS towards the other island and track distance to find the shortest path to another island

// Time complexity: linear O(r * c) - iteration through grid ~ some revisits
// Space complexity: linear O(r * c) - maps and queue/recursive stacks
const bestBridge2 = (grid) => {
  const visited = new Set();
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // Explore the first island found and then find a bridge size to get to the next island
      if (!visited.has(row + ' ' + col) && grid[row][col] === 'L') {
        const islandMap = exploreIsland(grid, row, col, visited);
        const bridgeLength = findBridgeLength(grid, islandMap, visited);
        return bridgeLength;
      }
    }
  }
  
};

// Find the shortest bridge to another island
// Iterate through islandMap and BFS to nearest unvisited land, tracking distance
const findBridgeLength = (grid, islandMap, visited) => {
  const queue = islandMap.map(pos => [pos, 0]) // add initial distance 0 to each position
  
  while (queue.length) {
    const [position, distance] = queue.shift();
    const [row, col] = position;
    
    for (let direction of directions) {
      const nextRow = row + direction[0];
      const nextCol = col + direction[1];
      
      // skip if out of bounds
      if (nextRow < 0 || nextRow >= grid.length) continue;
      if (nextCol < 0 || nextCol >= grid[0].length) continue;
      
      // Explore both unmapped water and land 
      // If the next location is unmapped and land, return current distance as the bridge length
      // If the next locations is unmapped and water, add to queue to continue searching
      if (!visited.has(nextRow + ' ' + nextCol)) {
        if (grid[nextRow][nextCol] === "L") return distance;
        queue.push([[nextRow, nextCol], distance + 1]);     
        visited.add(nextRow + ' ' + nextCol)
      }
    }
  }
}

// Explore the island and save the coordinates of land
const exploreIsland = (grid, row, col, visited, islandMap = []) => {
  if (visited.has(row + ' ' + col)) return islandMap;
  if (grid[row][col] === "W") return islandMap;
  visited.add(row + ' ' + col); // only add visited land
  islandMap.push([row, col]);
  
  for (let direction of directions) {
    const nextRow = row + direction[0];
    const nextCol = col + direction[1];
    
    // skip if out of bounds
    if (nextRow < 0 || nextRow >= grid.length) continue;
    if (nextCol < 0 || nextCol >= grid[0].length) continue;
    exploreIsland(grid, nextRow, nextCol, visited, islandMap);
  }
  
  return islandMap;
}

// Up, down, left right
const directions = [
  [0, 1], 
  [0, -1], 
  [1, 0], 
  [-1, 0]
]

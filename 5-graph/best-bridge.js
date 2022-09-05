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
}
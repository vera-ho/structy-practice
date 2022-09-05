// Time complexity: 
// Space complexity: 
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
        
        for(let i = 0; i < dirs.length; i++) {
            let [x, y] = dirs[i];
            let nextRow = row + x;
            let nextCol = col + y;
            let nextPos = nextRow + " " + nextCol;
            let inBoundsRow = nextRow >= 0 && nextRow < grid.length;
            let inBoundsCol = nextCol >= 0 && nextCol < grid[0].length;
    
            if(inBoundsCol && inBoundsRow && !visited.has(nextPos)) {
                queue.push([nextRow, nextCol, steps + 1]);
                visited.add(nextPos);
            }
        } 
    }
};

const traverseIsland = (grid, row, col, visited) => {
    const dirs = [ [0, 1], [1, 0], [-1, 0], [0, -1] ];
    const queue = [ [row, col] ];
    const map = [ [row, col, 0] ];
    
    while(queue.length) {
        let [row, col] = queue.shift();
        
        for(let i = 0; i < dirs.length; i++) {
            let [x, y] = dirs[i];
            let nextRow = row + x;
            let nextCol = col + y;
            let nextPos = nextRow + " " + nextCol;
            let inBoundsRow = nextRow >= 0 && nextRow < grid.length;
            let inBoundsCol = nextCol >= 0 && nextCol < grid[0].length;
    
            if(inBoundsCol && inBoundsRow && 
            grid[nextRow][nextCol] === 'L' && !visited.has(nextPos)) {
                queue.push([nextRow, nextCol]);
                map.push([nextRow, nextCol, 0]);
                visited.add(nextPos);
            }
        }
    }
    
    return map;
};
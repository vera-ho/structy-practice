// Time complexity: O(n x m)
// Space complexity: O(n x m)
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

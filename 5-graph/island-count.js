// Time complexity: O(n * m) 
// Space complexity: O(n * m)
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
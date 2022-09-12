const maxPathSum = (grid, row = 0, col = 0, maxValues = {}) => {
    let pos = row + " " + col;
    if(outOfBounds(grid, row, col)) return 0;
    if(pos in maxValues) return maxValues[pos];
    if(row === grid.length - 1 && col === grid[0].length - 1) return grid[row][col];
    
    let down = maxPathSum(grid, row + 1, col, maxValues);
    let right = maxPathSum(grid, row, col + 1, maxValues);
    maxValues[pos] = Math.max(down, right) + grid[row][col];
    return maxValues[pos];
};
    
const outOfBounds = (grid, row, col) => {
    const rowBounds = row >= grid.length;
    const colBounds = col >= grid[0].length;
    return rowBounds || colBounds;
}
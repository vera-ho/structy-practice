// Time complexity: O(r x c) linear
// Space complexity: O(r x c) linear
// Without memoization, time complexity is O(2^(r+c)) exponential, space complexity is O(r + c)
const countPaths = (grid, row = 0, col = 0, pathCtr = {}) => {
    let pos = row + " " + col;
    if(pos in pathCtr) return pathCtr[pos];
    if(outOfBounds(grid, row, col)) return 0;
    if(row === grid.length - 1 && col === grid[0].length - 1) return 1;
    
    let down = countPaths(grid, row + 1, col, pathCtr);
    let right = countPaths(grid, row, col + 1, pathCtr);
    pathCtr[pos] = down + right;
    return pathCtr[pos];
};

const outOfBounds = (grid, row, col) => {
    const rowBounds = row >= grid.length;
    const colBounds = col >= grid[0].length;
    return rowBounds || colBounds || grid[row][col] === 'X';
}
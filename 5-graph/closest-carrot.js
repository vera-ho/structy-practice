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
  

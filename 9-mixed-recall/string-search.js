// Write a function, stringSearch, that takes in a grid of letters and a string as arguments. The function should return a boolean indicating whether or not the string can be found in the grid as a path by connecting horizontal or vertical positions. The path can begin at any position, but you cannot reuse a position more than once in the path.
// You can assume that all letters are lowercase and alphabetic.

// Approach
// Track 'found' positions for letters that have been found that are in the string 
// Iterate through the grid and check each character for the first letter in the string
// When a match is found, add to 'found' Set. 
// Track index of next letter that needs to be found in the string
// Check the 4 letters next to the current letter and if they match the next needed letter
// If none of the 4 fit, return false and keep iterating through the grid
// If any of the 4 fit, continue searching until the whole string has been found and return true

// m * n -> grid size; s -> string length
// Time complexity: O(3^(mn)) -> 3 due to the 3 possible directions without backtracking a position
// Space complexity: O(rc)
const stringSearch = (grid, s) => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (searchForString(grid, row, col, s, 0)) return true;
    }
  }

  return false;
};

const searchForString = (grid, row, col, s, index, visited = new Set()) => {
  const key = row + ' ' + col;
  if (visited.has(key)) return false;
  
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return false;
  if (grid[row][col] !== s[index]) return false;
  if (index >= s.length - 1) return true;

  const up = searchForString(grid, row - 1, col, s, index + 1, visited);
  const down = searchForString(grid, row + 1, col, s, index + 1, visited);
  const left = searchForString(grid, row, col - 1, s, index + 1, visited);
  const right = searchForString(grid, row, col + 1, s, index + 1, visited);

  visited.add(key);
  return up || down || left || right;
}

// const grid0 = [
//   ['e', 'y', 'h', 'i', 'j'],
//   ['q', 'x', 'e', 'r', 'p'],
//   ['r', 'o', 'l', 'l', 'n'],
//   ['p', 'r', 'x', 'o', 'h'],
//   ['a', 'a', 'm', 'c', 'm']
// ];
// stringSearch(grid0, 'hello'); // -> true

// const grid1 = [
//   ['e', 'y', 'h', 'i', 'j'],
//   ['q', 'x', 'e', 'r', 'p'],
//   ['r', 'o', 'l', 'l', 'n'],
//   ['p', 'r', 'x', 'o', 'h'],
//   ['a', 'a', 'm', 'c', 'm']
// ];
// stringSearch(grid1, 'proxy'); // -> true

// const grid2 = [
//   ['e', 'y', 'h', 'i', 'j'],
//   ['q', 'x', 'e', 'r', 'p'],
//   ['r', 'o', 'l', 'l', 'n'],
//   ['p', 'r', 'x', 'o', 'h'],
//   ['a', 'a', 'm', 'c', 'm']
// ];
// stringSearch(grid2, 'rolling'); // -> false

// const grid3 = [
//   ['e', 'y', 'h', 'i', 'j'],
//   ['q', 'x', 'e', 'r', 'p'],
//   ['r', 'o', 'l', 'l', 'n'],
//   ['p', 'r', 'x', 'o', 'h'],
//   ['a', 'a', 'm', 'z', 'm']
// ];
// stringSearch(grid3, 'zoo'); // -> false

// const grid4 = [
//   ['q', 'w', 'h', 'i', 'j'],
//   ['q', 'e', 'r', 'o', 'p'],
//   ['h', 'y', 't', 'x', 'z'],
//   ['k', 'o', 'm', 'o', 'p']
// ];
// stringSearch(grid4, 'qwerty'); // -> true

// const grid5 = [ 
//   [ 'f', 'd', 'i', 'e', 'l', 'u', 'j', 't', 'q', 'v', 'o', 'p' ], 
//   [ 'o', 'p', 'b', 'e', 'm', 'w', 'm', 'l', 'h', 'j', 's', 'v' ], 
//   [ 'g', 'b', 's', 'm', 'i', 'w', 'w', 'h', 'l', 'm', 'l', 'n' ], 
//   [ 'a', 'l', 's', 'k', 'p', 'c', 't', 'u', 'v', 'b', 'c', 'm' ], 
//   [ 'm', 't', 'c', 'k', 'e', 'n', 'r', 'b', 'a', 'z', 'l', 'c' ], 
//   [ 'q', 'm', 'a', 'p', 'a', 'p', 'i', 'i', 'u', 't', 'z', 'z' ], 
//   [ 'd', 'u', 'z', 'o', 'e', 'r', 'a', 't', 't', 'c', 'q', 'k' ], 
//   [ 'f', 'u', 'z', 'g', 'c', 'i', 'k', 'v', 'o', 'f', 's', 'w' ], 
//   [ 'p', 'h', 'u', 'i', 'k', 'c', 'v', 'v', 'h', 'q', 'v', 'i' ], 
//   [ 'l', 'q', 'w', 'f', 'y', 'g', 'w', 'f', 'a', 'u', 'x', 'q' ] 
// ];
// stringSearch(grid5, 'paprika'); // -> true

// const grid6 = [
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 'x', 'x' ],
//     [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 'x', 'h' ],
// ];
// stringSearch(grid6, 'sssssssh'); // -> false

// const grid7 = [
//   ['a', 'b', 'a'],
//   ['t', 'x', 'x'],
//   ['x', 'x', 'x'],
// ];
// stringSearch(grid7, 'abat'); // -> true

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative DFS solution
const treeLevels = (root) => {
    if(!root) return [];
    
    const levels = [ 0 ];
    const stack = [ root ];
    const treeValues = [];
  
    while(stack.length > 0) {
        let node = stack.pop();
        let level = levels.pop();
        
        if(node.right) {
            stack.push(node.right);
            levels.push(level + 1)
        }
        
        if(node.left) {
            stack.push(node.left);
            levels.push(level + 1)
        }
        
        if(treeValues[level]) treeValues[level].push(node.val) 
        else treeValues[level] = [node.val]
    }
    
    return treeValues;
};

// Time complexity: O(n^2) quadratic
// Space complexity: O(n) linear
// Recursive DFS solution
const treeLevelsRecursive = (root) => {
  if(!root) return [];
    if(!root.left && !root.right) return [[root.val]]
    
    // treeValues[0] is like the 'root' of this recursice step
    // get the values from other levels in 2D array format
    const treeValues = [[root.val]];
    const left = treeLevels(root.left);
    const right = treeLevels(root.right);
    
    // Check each element of the left result which are at levels below current 'root'
    // Check if an array already exists for the level and either create the array at the index or concatenate values to it
    for(let i = 0; i < left.length; i++) {
        if(treeValues[i + 1]) treeValues[i + 1] = treeValues[i + 1].concat(left[i]);
        else treeValues[i + 1] = left[i];
        // console.log('left', i, treeValues)
    }
    
    // do the same for the right side results
    for(let i = 0; i < right.length; i++) {
        if(treeValues[i + 1]) treeValues[i + 1] = treeValues[i + 1].concat(right[i]);
        else treeValues[i + 1] = right[i];
        // console.log('right', i, treeValues)
    }
    
  return treeValues;
};

// Console log results ^^
// left 0 [ [ 'b' ], [ 'd' ] ] 
// right 0 [ [ 'b' ], [ 'd', 'e' ] ] 
// right 0 [ [ 'c' ], [ 'f' ] ] 
// left 0 [ [ 'a' ], [ 'b' ] ] 
// left 1 [ [ 'a' ], [ 'b' ], [ 'd', 'e' ] ] 
// right 0 [ [ 'a' ], [ 'b', 'c' ], [ 'd', 'e' ] ] 
// right 1 [ [ 'a' ], [ 'b', 'c' ], [ 'd', 'e', 'f' ] ] 

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative BFS solution
const treeLevelsBFS = (root) => {
    if(!root) return [];
  
    const levels = [0];
    const queue = [ root ];
    const treeValues = [];
    
    while(queue.length > 0) {
        let node = queue.shift();
        let level = levels.shift();
        
        if(node.left) {
            levels.push(level + 1);
            queue.push(node.left);
        }
        
        if(node.left) {
            levels.push(level + 1);
            queue.push(node.left);
        }
        
        if(treeValues[level]) treeValues[level].push(node.val);
        else treeValues.push([node.val])
    }
    
    return treeValues;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative BFS solution
const treeLevelsHashBFS = (root) => {
    if(!root) return [];
  
    const queue = [ { node: root, level: 0 } ];
    const treeValues = [];
    
    while(queue.length > 0) {
        let { node, level }  = queue.shift();
        
        if(node.left) queue.push({ node: node.left, level: level + 1 });
        if(node.right) queue.push({ node: node.right, level: level + 1 });
        
        if(treeValues[level]) treeValues[level].push(node.val);
        else treeValues.push([node.val])
    }
    
    return treeValues;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const treeLevelsRecursive2 = (root) => {
    const treeValues = [];
    
    const treeHelper = (root, level, treeValues) => {
        if(!root) return;
    
        if(treeValues[level]) treeValues[level].push(root.val);
        else treeValues[level] = [root.val]
        
        if(root.left) treeHelper(root.left, level + 1, treeValues);
        if(root.right) treeHelper(root.right, level + 1, treeValues);
    }
    
    treeHelper(root, 0, treeValues);
    return treeValues;
};


// Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

// Approach: 
// Track node value and level of depth 
// For each node, check if that level exists - if so, add value to it otherwise, create it (levels index)

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const treeLevels2 = (root) => {
  if (!root) return [];

  const stack = [[root, 0]]; // [[node, level]]
  const levels = [];
  
  while (stack.length) {
    const [current, level] = stack.pop();
    if (current.right) stack.push([current.right, level + 1]);
    if (current.left) stack.push([current.left, level + 1]);
    if (levels[level]) {
      levels[level].push(current.val)
    } else {
      levels[level] = [current.val];
    }
  }
  
  return levels;
};

// Recursive approach
// Track level and output array
// For each node, add itself to the proper place and then run the fn on left and right children, if any
// Time and space complexities are both linear O(n)
const treeLevels2Rec = (root, level = 0, levels = []) => {
  if (!root) return [];
  
  if (levels[level]) levels[level].push(root.val)
  else levels[level] = [root.val]
//   console.log('level', level, levels)
  
  const left = treeLevels(root.left, level + 1, levels);
  const right = treeLevels(root.right, level + 1, levels);
  
  return levels;
};

// Log output
// level 0 [ [ 'a' ] ] 
// level 1 [ [ 'a' ], [ 'b' ] ] 
// level 2 [ [ 'a' ], [ 'b' ], [ 'd' ] ] 
// level 2 [ [ 'a' ], [ 'b' ], [ 'd', 'e' ] ] 
// level 1 [ [ 'a' ], [ 'b', 'c' ], [ 'd', 'e' ] ] 
// level 2 [ [ 'a' ], [ 'b', 'c' ], [ 'd', 'e', 'f' ] ] 
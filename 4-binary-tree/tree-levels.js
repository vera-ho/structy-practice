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

// Time complexity: O(n^2) linear
// Space complexity: O(n) linear
// Recursive DFS solution
const treeLevelsRecursive = (root) => {
    if(!root) return [];
    if(!root.left && !root.right) return [[root.val]]
    
    const treeValues = [[root.val]];
    const left = treeLevels(root.left);
    const right = treeLevels(root.right);
    
    for(let i = 0; i < left.length; i++) {
        if(treeValues[i + 1]) treeValues[i + 1] = treeValues[i + 1].concat(left[i]);
        else treeValues[i + 1] = left[i];
    }
    
    for(let i = 0; i < right.length; i++) {
        if(treeValues[i + 1]) treeValues[i + 1] = treeValues[i + 1].concat(right[i]);
        else treeValues[i + 1] = right[i];
    }
    
    return treeValues;
};

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
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
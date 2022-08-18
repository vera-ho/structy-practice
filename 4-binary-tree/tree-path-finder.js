// Time complexity: O(n) linear? - is concat O(n) or O(1)??
// Space complexity: O(n) linear
// Recursive DFS solution
const pathFinder = (root, target) => {
    if(!root) return null;
    if(root.val === target) return [root.val];
    
    let leftPath = pathFinder(root.left, target);
    if(leftPath) return [root.val].concat(leftPath);
    
    let rightPath = pathFinder(root.right, target);
    if(rightPath) return [root.val].concat(rightPath);
  
    return null;
};


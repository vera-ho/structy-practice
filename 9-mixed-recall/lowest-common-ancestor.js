/**
 * Time complexity: O(n) linear
 * Space complexity: O(n) linear
 * Approach: Find the path to each value (DFS) and return the path in an array.
 *   Put values for one path into a Set, and check the first occurrence in the other path.
 */
 const lowestCommonAncestor = (root, val1, val2) => {
    const visited = new Set();
    const path1 = findPath(root, val1, visited);
    const path2 = findPath(root, val2);
  
    for(let val of path2) {
      if(visited.has(val)) return val;
    }
  }
  
  const findPath = (node, val, visited = new Set()) => {
    if(!node) return null;
    if(node.val === val) {
        visited.add(node.val);
        return [ node.val ];
    }
  
    let left = findPath(node.left, val, visited);
    let right = findPath(node.right, val, visited);
    
    if(left) {
        visited.add(node.val);
        left.push(node.val);
        return left;
    }
    
    if(right) {
        visited.add(node.val);
        right.push(node.val)
        return right;
    } 
    
    return null;
}

const lowestCommonAncestorCleaner = (root, val1, val2) => {
    const path1 = findPath(root, val1);
    const path2 = findPath(root, val2);
    const visited = new Set(path1);
  
    for(let val of path2) {
      if(visited.has(val)) return val;
    }
  }
  
  const findPathCleaner = (node, val) => {
    if(!node) return null;
    if(node.val === val) return [ node.val ];
  
    let left = findPath(node.left, val);
    let right = findPath(node.right, val);
    
    if(left) {
        left.push(node.val);
        return left;
    }
    
    if(right) {
        right.push(node.val)
        return right;
    } 
    
    return null;
  }
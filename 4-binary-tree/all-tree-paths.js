/** Approach
 *      - Base cases:
 *          * root is null, return empty array
 *          * root has no children, return 2D array with root value
 *      - Find paths of children nodes
 *      - Concatenate paths together
 *      - Add current node value to each subarray 
 */

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// DFS Recursive solution
const allTreePaths = (root) => {
    if(!root) return [];
    if(!root.left && !root.right) return [[ root.val ]];
    
    let paths = [];
    const leftPath = allTreePaths(root.left);
    const rightPath = allTreePaths(root.right);
    
    paths = paths.concat(leftPath, rightPath);
    paths.forEach( path => path.unshift(root.val))
    return paths;
};
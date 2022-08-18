// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time complexity: O(n^2) quadratic - shift is O(n)
// Space complexity: O(n) linear
// Iterative solution
const breadthFirstValues = (root) => {
    if(!root) return [];
    
    // use array to represent queue (FIFO)
    let queue = [root];
    let values = [];
    
    while(queue.length > 0) {
        let current = queue.shift();
        values.push(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right)
    }
    
    return values;
};
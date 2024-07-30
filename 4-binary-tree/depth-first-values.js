// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// Approach: 
// Depth first: Check all values going deep into the tree first to the leaves (i.e. left) before checking right nodes
// Use a stack (FILO) to track progress - check if left and right nodes exist and add existing nodes to stack 
// Add value to an array when the node is 'used' (not added to the stack)

// Time complexity: linear O(n)
// Space complexity: linear O(n)
const depthFirstValues = (root) => {
  if (!root) return [];
  
  // set arrays to hold stack of nodes and values
  const stack = [ root ];
  const values = [];
  
  // iterate through all nodes in the binary tree
  while(stack.length) {
    // take the top node in stack and add any possible children to the stack
    const node = stack.pop();
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    
    // save the value of the current node to the output array
    values.push(node.val);
  }
  
  return values;
};

// Time complexity: linear O(n)
// Space complexity: linear O(n)
const depthFirstValuesRec = (root) => {
  // if tree is empty, output is empty array
  if (!root) return [];
  
  // if left/right nodes exist, run the fn with each node as its own 'root' and save the resulting array of values
  const left = depthFirstValuesRec(root.left);
  const right = depthFirstValuesRec(root.right);
  
  // concatentate root, left and right values together
  return [root.val, ...left, ...right];
};

/*****************************************************************************/
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

/*****************************************************************************/
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

// depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']

/*****************************************************************************/
// const a = new Node('a');
//      a
// depthFirstValues(a); 
//    -> ['a']

/*****************************************************************************/
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

// depthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e']

/*****************************************************************************/
// depthFirstValues(null); 
//    -> []

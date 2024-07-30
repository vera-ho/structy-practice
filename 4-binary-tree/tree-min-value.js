// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
// The function should return the minimum value within the tree.
const treeMinValue = (root) => {
  let minValue = Infinity;
  
  // stack for DFS & queue for BFS
  const nodes = [ root ];
  while (nodes.length) {
    // DFS - linear O(n) time and space
    // const current = nodes.pop();
    // if (current.right) nodes.push(current.right);
    // if (current.left) nodes.push(current.left);
    // if (minValue > current.val) minValue = current.val;
    
    // BFS - quadratic O(n^2) time and linear O(n) space
    const current = nodes.shift();
    if (current.left) nodes.push(current.left);
    if (current.right) nodes.push(current.right);
    if (minValue > current.val) minValue = current.val;
  }
  
  return minValue;
};

const treeMinValueRec = (root) => {
  if (!root) return Infinity;
  const minLeft = treeMinValueRec(root.left);
  const minRight = treeMinValueRec(root.right);
  return Math.min(root.val, minLeft, minRight);
};

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/*****************************************************************************/
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// treeMinValue(a); // -> -2

/*****************************************************************************/
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(14);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

// treeMinValue(a); // -> 3

/*****************************************************************************/
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

// treeMinValue(a); // -> -13

/*****************************************************************************/
// const a = new Node(42);

//        42

// treeMinValue(a); // -> 42

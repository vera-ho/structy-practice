class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Write a function, isBinarySearchTree, that takes in the root of a binary tree. The function should return a boolean indicating whether or not the tree satisfies the binary search tree property.
// A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.

// Approach
// Navigate through the tree and track the min/max values that a node can be to maintain a valid binary tree
// For each recursive call update the min/max based on the current node value
//   If the next node is node.left -> update max to node.val and pass min through
//   If the next node is node.right -> update min to node.val and pass max through
// If a null node is reached, then return true since that branch is valid
// If a node value is out of it's min/max bounds, return false
// If the results from node.left and node.right are valid, then that path is valid

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const isBinarySearchTree = (root, min = 0, max = Infinity) => {
  if (!root) return true;
  if (root.val < min || root.val > max) return false;

  const left = isBinarySearchTree(root.left, min, root.val);
  const right = isBinarySearchTree(root.right, root.val, max);
  return left && right;  
}; 

/********************************************************/

// const a = new Node(12);
// const b = new Node(5);
// const c = new Node(18);
// const d = new Node(3);
// const e = new Node(9);
// const f = new Node(19);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   5     18
// //  / \     \
// // 3   9     19

// isBinarySearchTree(a); // -> true

/********************************************************/

// const a = new Node(12);
// const b = new Node(5);
// const c = new Node(18);
// const d = new Node(3);
// const e = new Node(15);
// const f = new Node(19);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   5     18
// //  / \     \
// // 3   15     19

// isBinarySearchTree(a); // -> false

/********************************************************/

const a = new Node(12);
const b = new Node(5);
const c = new Node(19);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     19
//  / \     \
// 3   9     19

isBinarySearchTree(a); // -> true

/********************************************************/

// const a = new Node(12);
// const b = new Node(5);
// const c = new Node(10);
// const d = new Node(3);
// const e = new Node(9);
// const f = new Node(19);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   5     10
// //  / \     \
// // 3   9     19

// isBinarySearchTree(a); // -> false

/********************************************************/

// const q = new Node(54);
// const r = new Node(42);
// const s = new Node(70);
// const t = new Node(31);
// const u = new Node(50);
// const v = new Node(72);
// const w = new Node(47);
// const x = new Node(90);

// q.left = r;
// q.right = s;
// r.left = t;
// r.right = u;
// s.right = v;
// u.left = w;
// v.right = x;

// //       54
// //     /    \
// //    42     70
// //   / \      \
// // 31   50     72
// //     /        \
// //    47         90

// isBinarySearchTree(q); // -> true

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Write a function, binarySearchTreeIncludes, that takes in the root of a binary search tree containing numbers and a target value. The function should return a boolean indicating whether or not the target is found within the tree.
// A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.
// Your solution should have a best case runtime of O(log(n)).

// Approach
// Use depth first search to choose to continue searching left or right children nodes
// Determine if target is lesser or greater than current node value and add the corresponding child to the stack (left if less than; right if greater than)
// Return true when value is found and false if a null child is reached

// Time complexity: O(log(n)) logarithmic best case balanced tree | O(n) worst case
// Space complexity: O(log(n)) logarithmic best case | O(n) worst case
const binarySearchTreeIncludes = (root, target) => {
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) {
      return true;
    }
    
    const next = target >= current.val ? current.right : current.left;
    if (next) {
      stack.push(next);
    }
  }

  return false;
};

const binarySearchTreeIncludesRecursive = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  const next = target > root.val ? root.right : root.left;
  return binarySearchTreeIncludes(next, target);
};

// // Tree A
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

// binarySearchTreeIncludes(a, 9); // -> true
// binarySearchTreeIncludes(a, 15); // -> false
// binarySearchTreeIncludes(a, 1); // -> false
// binarySearchTreeIncludes(a, 12); // -> true

// // Tree Q
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

// binarySearchTreeIncludes(q, 55); // -> false
// binarySearchTreeIncludes(q, 47); // -> true
// binarySearchTreeIncludes(q, 49); // -> false
// binarySearchTreeIncludes(q, 70); // -> true
// binarySearchTreeIncludes(q, 100); // -> false

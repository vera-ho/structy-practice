// Write a function, isTreeBalanced, that takes in the root of a binary tree. The function should return a boolean indicating whether or not the tree is "balanced".

// A "balanced" binary tree is a binary tree where the height between the left and right subtrees differs by at most 1 for every node.

// Approach -> Recursive
// Base case: head is null, return 0
// Recursively call the function with left and right nodes as the head of their subtree
// Take the results of both and check if either returned -1 (identifies unbalanced tree) and return the -1
// If both are >= 0
//   Find the difference between heights and if > 1, return -1
//   Otherwise, return the max height + 1

// Time complexity: O(n) linear
// Space complexity: O(n) linear
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const isTreeBalanced = (root) => {
    return checkTree(root) >= 0;
};

const checkTree = (head) => {
    if (!head) return 0;

    const leftHeight = checkTree(head.left);
    const rightHeight = checkTree(head.right);

    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
};

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");

// a.left = b;
// a.right = c;

//         a
//       /   \
//      b    c

// isTreeBalanced(a); // -> true

/*******************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.left = b;
// a.right = c;
// b.right = d;

//         a
//       /   \
//      b    c
//      \
//      d

// isTreeBalanced(a); // -> true

/*******************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");

// a.right = b;
// b.right = c;

//        a
//         \
//          b
//          \
//           c

// isTreeBalanced(a); // -> false

/*******************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// isTreeBalanced(a); // -> true

/*******************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");

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

// isTreeBalanced(a); // -> true

/*******************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// c.right = e;
// d.left = f;

//        a
//      /   \
//     b     c
//    /      \
//   d        e
//  /
// f

// isTreeBalanced(a); // -> false

/*******************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// g.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g
//   \
//    h

// isTreeBalanced(a); // -> false

/*******************************************************/
// const a = new Node("a");

// //        a

// isTreeBalanced(a); // -> true

/*******************************************************/
// isTreeBalanced(null); // -> true

/*******************************************************/

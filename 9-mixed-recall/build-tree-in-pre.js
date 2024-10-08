class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Write a function, buildTreeInPre, that takes in an array of in-ordered values and an array of pre-ordered values for a binary tree. The function should build a binary tree that has the given in-order and pre-order traversal structure. The function should return the root of this tree.
// You can assume that the values of inorder and preorder are unique.

// Approach
// in the preOrder array, the first element is the subtree's root value
// find the index of this value in the inOrder array and split both arrays into left/right subarrays
// recurisvely call buildTreeInPre with the new subarrays 
// set the root.left and root.right to the return node of the recurisve calls

// Time complexity: O(n^2) quadratic - call stack + array copies
// Space complexity: O(n^2) quadratic
const buildTreeInPre = (inOrder, preOrder) => {
  if (inOrder.length === 0 || preOrder.length === 0) return null;

  // Find the value of the root node create node
  const rootVal = preOrder[0];
  const rootIndex = inOrder.indexOf(rootVal);
  const root = new Node(rootVal);

  // Split the arrays into left & right subarrays
  const inOrderLeft = inOrder.slice(0, rootIndex);
  const inOrderRight = inOrder.slice(rootIndex + 1);

  const inOrderLength = inOrderLeft.length;
  const preOrderLeft = preOrder.slice(1, inOrderLength + 1);
  const preOrderRight = preOrder.slice(inOrderLength + 1);

  // Build the subtrees
  root.left = buildTreeInPre(inOrderLeft, preOrderLeft);
  root.right = buildTreeInPre(inOrderRight, preOrderRight);
  return root;
};

/*********************************************************************/

// buildTreeInPre(
//   [ 'z', 'y', 'x' ],
//   [ 'y', 'z', 'x' ] 
// );
// //       y
// //    /    \
// //   z      x

/*********************************************************************/

// buildTreeInPre(
//   [ 'y', 'z', 'x' ],
//   [ 'y', 'x', 'z' ] 
// );
// //       y
// //        \
// //         x
// //        / 
// //       z

/*********************************************************************/

// buildTreeInPre(
//   [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
//   [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ] 
// );
// //       a
// //    /    \
// //   b      c
// //  / \      \
// // d   e      f
// //    / \
// //    g  h

/*********************************************************************/

// buildTreeInPre(
//   [ 't', 'u', 's', 'q', 'r', 'p' ],
//   [ 'u', 't', 's', 'r', 'q', 'p' ] 
// );
// //     u
// //  /    \
// // t      s
// //         \
// //         r
// //        / \
// //        q  p

/*********************************************************************/

// buildTreeInPre(
//   [ 'm', 'l', 'q', 'o', 'r', 'n', 's', 'p', 't' ],
//   [ 'l', 'm', 'n', 'o', 'q', 'r', 'p', 's', 't' ] 
// );
// //        l
// //     /     \
// //    m       n
// //         /    \
// //         o     p
// //        / \   / \
// //       q   r s   t

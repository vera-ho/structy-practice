class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. The function should build a binary tree that has the given in-order and post-order traversal structure. The function should return the root of this tree.
// You can assume that the values of inorder and postorder are unique.

// Approach 
// The last element of the postorder array is the root node for the tree
// The elements to the left of the root in the inorder array are root.left nodes and the elements to the right are the root.right nodes
// That pattern repeats for each subtree

// Take the last element of postOrder and create a node for the value
// Find the index of that value in inOrder and split into left/right arrays
// Take the length of the left array and split postOrder into left/right arrays
// Recursively call buildTreeInPost with updated inOrder and postOrder arrays
// Take the return value from each and add as root.left and root.right to the root node

// Time complexity: O(n^2) quadratic - call stack + copies of arrays
// Space complexity: O(n^2) quadratic
const buildTreeInPost = (inOrder, postOrder) => {
  if (inOrder.length === 0 || postOrder.length === 0) return null;
  
  // Create the subtree's root node
  const lastPostIndex = postOrder.length - 1;
  const rootValue = postOrder[lastPostIndex];
  const root = new Node(rootValue);
  
  // Divide the inOrder and postOrder arrays into left and right arrays
  const rootIndex = inOrder.indexOf(rootValue);
  const inOrderLeft = inOrder.slice(0, rootIndex);
  const inOrderRight = inOrder.slice(rootIndex + 1);

  const leftLength = inOrderLeft.length;
  const postOrderLeft = postOrder.slice(0, leftLength);
  const postOrderRight = postOrder.slice(leftLength, lastPostIndex);

  // Add subtrees to root
  root.left = buildTreeInPost(inOrderLeft, postOrderLeft);
  root.right = buildTreeInPost(inOrderRight, postOrderRight);
  return root;
};

// buildTreeInPost(
//   [ 'y', 'x', 'z' ],
//   [ 'y', 'z', 'x' ] 
// );
// //       x
// //    /    \
// //   y      z

/*********************************************************************/

// buildTreeInPost(
//   [ 'd', 'b', 'e', 'a', 'f', 'c', 'g' ],
//   [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ] 
// );
// //      a
// //    /    \
// //   b      c
// //  / \    / \
// // d   e  f   g

/*********************************************************************/

// buildTreeInPost(
//   [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
//   [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ] 
// );
// //      a
// //    /    \
// //   b      c
// //  / \      \
// // d   e      f
// //    / \
// //    g  h

/*********************************************************************/

// buildTreeInPost(
//   ['m', 'n'],
//   ['m', 'n']
// );
// //       n
// //     /
// //    m

/*********************************************************************/

// buildTreeInPost(
//   ['n', 'm'],
//   ['m', 'n']
// );
// //     n
// //      \
// //       m

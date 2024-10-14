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
// find the index of this value in the inOrder array and track the indicies of left and right subtrees (for in-place logic)
// recurisvely call buildTreeInPre with the indicies of the subtree
// set the root.left and root.right to the return node of the recurisve calls

// Index tracking
// inStart -> starts at 0 for the beginning of the array
//    left: pass inStart through to next call
//    right: rootIndex + 1 for the value after the root node value
// inEnd -> starts at inOrder.length - 1 for the last element of the array
//    left: rootIndex - 1 to take out the root node value
//    right: pass inEnd through to next call
// preStart -> starts at 0 for the beginning of the array
//    left: prestart + 1 to exlude the root node from prev call
//    right: prestart + (rootIndex - inStart) + 1 where (rootIndex - inStart is the left length) so preStart points to the element after left values in preOrder
// preEnd -> starts at preOrder.length - 1 for the last element of the array
//    left: prestart + (rootIndex - inStart) 
//    right: pass 

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const buildTreeInPre = (
  inOrder, 
  preOrder, 
  inStart = 0, 
  inEnd = inOrder.length - 1, 
  preStart = 0, 
  preEnd = preOrder.length - 1 
) => {
  if (inStart > inEnd) return null;

  const rootVal = preOrder[preStart];
  const rootIndex = inOrder.indexOf(rootVal);
  const root = new Node(rootVal);

  root.left = buildTreeInPre(
    inOrder, 
    preOrder, 
    inStart, 
    rootIndex - 1, 
    preStart + 1, 
    rootIndex + rootIndex - inStart
  );
  root.right = buildTreeInPre(
    inOrder, 
    preOrder, 
    rootIndex + 1, 
    inEnd, 
    preStart + rootIndex - inStart + 1, 
    preEnd
  );
  
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

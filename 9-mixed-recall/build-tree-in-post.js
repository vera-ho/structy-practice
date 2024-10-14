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
// Find the index of that value in inOrder and the length of the left array
// Recursively call buildTreeInPost with updated inOrder and postOrder arrays along with updated indicices for start/end values for in and post arrays
// Take the return value from each and add as root.left and root.right to the root node

// Index tracking
// leftLength -> rootIndex - inStart
// inStart
//    left -> inStart (pass through)
//    right -> rootIndex + 1
// inEnd
//    left -> rootIndex - 1
//    right -> inEnd
// postStart
//    left -> postStart
//    right -> leftLength
// postEnd
//    left -> postStart + leftLength - 1
//    right -> postEnd - 1

// Time complexity: O(n) linear
// Space complexity: O(n) linear
const buildTreeInPost = (
  inOrder, 
  postOrder,
  inStart = 0,
  inEnd = inOrder.length - 1,
  postStart = 0,
  postEnd = postOrder.length - 1
) => {
  if (inStart > inEnd || postStart > postEnd) return null;
  
  // Create the subtree's root node
  const rootValue = postOrder[postEnd];
  const root = new Node(rootValue);
  const rootIndex = inOrder.indexOf(rootValue);

  // Add subtrees to root
  root.left = buildTreeInPost(
    inOrder, 
    postOrder,
    inStart,
    rootIndex - 1, 
    postStart,
    postStart + rootIndex - inStart - 1
  );

  root.right = buildTreeInPost(
    inOrder, 
    postOrder,
    rootIndex + 1, 
    inEnd,
    rootIndex - inStart,
    postEnd - 1
  );

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

// Original root 'a'
// [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
// [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ] 
//    0    1    2    3    4    5    6    7

// 'a' left: rootIndex = 5           'a' right:         
// [ 'd', 'b', 'g', 'e', 'h' ],      [ 'c', 'f' ]
//    0    1    2    3    4             6    7
// [ 'd', 'g', 'h', 'e', 'b' ]       [ 'f', 'c' ]
//    0    1    2    3    4             5    6    

// 'b' left:     'b' right:  rootIndex = 1    'c' left is null   'c' right: rootIndex = 6
// [ 'd' ],      [ 'g', 'e', 'h' ]               null            [ 'f' ]       
//    0             2    3    4                                     7
// [ 'd' ]       [ 'g', 'h', 'e' ]               null            [ 'f' ]
//    0             1    2    3                                     5

// 'e' left:     'e' right:  rootIndex = 3         
// [ 'g' ],      [ 'h' ]              
//    2             4           
// [ 'g' ]       [ 'h' ]       
//    1             2      

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

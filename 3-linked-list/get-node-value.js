// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Write a function, getNodeValue, that takes in the head of a linked list and an index. 
// The function should return the value of the linked list at the specified index.
// If there is no node at the given index, then return null.

// approach
// Iterate through the list until the index and return the value of that node. track progress using a counter
// recursively: decrement index each time and return value when index = 0

// time complexity: o(n) linear
// space complexity: o(n) linear for recursive / o(1) constant for iterative
const getNodeValueRec = (head, index) => {
  if (!head) return null;
  return !!index ? getNodeValueRec(head.next, index -1) : head.val;
};

const getNodeValue = (head, index) => {
  let currentNode = head;
  let counter = 0;
  
  while(counter != index && currentNode) {
    currentNode = currentNode.next;
    counter++;
  }
  
  return currentNode?.val || null;
};

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// getNodeValue(a, 2); // 'c'

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// getNodeValue(a, 7); // null

/*****************************************************************************/
// const node1 = new Node("banana");
// const node2 = new Node("mango");
// node1.next = node2;

// banana -> mango

// getNodeValue(node1, 0); // 'banana'

/*****************************************************************************/
// const node1 = new Node("banana");
// const node2 = new Node("mango");
// node1.next = node2;

// banana -> mango

// getNodeValue(node1, 1); // 'mango'


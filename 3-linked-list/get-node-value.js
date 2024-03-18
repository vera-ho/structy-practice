// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time complexity: O(n) linear
// Space complexity: O(1) constant
// Iterative solution
const getNodeValue = (head, index) => {
    let count = 0;
    let current = head;
    
    while(current) {
        if(count === index) return current.val;
        current = current.next;
        count++;
    }
    
    return null;
};

// Time complexity: O(n) linear
// Space complexity: O(n) constant
// Recursive solution
const getNodeValueRecursive = (head, index) => {
    if(!head) return null;
    if(index === 0) return head.val
    else return getNodeValue(head.next, index - 1)
  };


// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.
// If there is no node at the given index, then return null.
// approach
// Iterate through the list until the index and return the value of that node. track progress using a counter
// recursively: decrement index each time and return value when index = 0
// time complexity: o(n) linear
// space complexity: o(n) linear for recursive / o(1) constant for iterative
const getNodeValue2Rec = (head, index) => {
  if (!head) return null;
  return !!index ? getNodeValue(head.next, index -1) : head.val;
};

const getNodeValue2 = (head, index) => {
  let currentNode = head;
  let counter = 0;
  
  while(counter != index && currentNode) {
    currentNode = currentNode.next;
    counter++;
  }
  
  return currentNode?.val || null;
};

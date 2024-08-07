// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.
// Do this in-place.
// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

// Approach:
// Use a counter to iterate to the index and use pointers to track the previous and current nodes.
// Create a new node and set it's next node to the current node. Then set the previous node's next to the new node.
// If the index is 0, the new node becames the new head and its next value is the old head
// If the index is the last node, the new node's next is null

// Time complexity: linear O(n)
// Space complexity: constant O(1)
const insertNode2 = (head, value, index) => {
  const newNode = new Node(value);
  
  // Special case - returning newNode instead of head
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  
  let currentNode = head;
  let prev = null;
  let counter = 0;
  
  while(counter <= index) {
    if(counter === index) {
      prev.next = newNode;
      newNode.next = currentNode;
      return head;
    }
    prev = currentNode;
    currentNode = !!currentNode && currentNode.next;
    counter++;
  }  
};

// Approach:
// Instead of counting up to the index, each recursive step decreases the index by 1 since we are pointing 1 node down the list
// If the head is null and index is zero, then we know we reached the end of the list and the new node needed to be added at the very end of the list
// If the index is 0, we found where the new node needs to be added so set new node's next to head
// Keep recursing until index is 0 by setting the current head's next to the results of insertNode

// Time complexity: linear O(n)
// Space complexity: linear O(n)
const insertNodeRec = (head, value, index) => {
  const newNode = new Node(value);
  if(!head && !index) return newNode; // newNode.next is already null
  
  // Found the index that newNode needs to be inserted
  if(!index) {
    newNode.next = head;
    return newNode;
  } 
  
  // Continue going through list
  head.next = insertNodeRec(head.next, value, index - 1);
  return head;
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

// insertNode(a, 'x', 2);
// a -> b -> x -> c -> d

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// insertNode(a, 'v', 3);
// a -> b -> c -> v -> d

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// insertNode(a, 'm', 4);
// a -> b -> c -> d -> m

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");

// a.next = b;

// a -> b

// insertNode(a, 'z', 0);
// z -> a -> b 

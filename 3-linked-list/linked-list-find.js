// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

// approach
// iterate through list and check if each value is equal to the target
// return true if value is found, false otherwise

// time complexity: linear O(n)
// space complexity: constant O(n) (iterative) or linear O(n) (recursive)
const linkedListFindRec = (head, target) => {
  if (!head) return false;
  return head.val === target || linkedListFindRec(head.next, target)
};

const linkedListFind = (head, target) => {
  let currentNode = head;
  
  while (currentNode) {
    if(currentNode.val === target) return true;
    currentNode = currentNode.next;
  }
  
  return false;
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

// linkedListFind(a, "c"); // true

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// linkedListFind(a, "d"); // true

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// linkedListFind(a, "q"); // false

/*****************************************************************************/
// const node1 = new Node("jason");
// const node2 = new Node("leneli");

// node1.next = node2;

// jason -> leneli

// linkedListFind(node1, "jason"); // true

/*****************************************************************************/
// const node1 = new Node(42);

// 42

// linkedListFind(node1, 42); // true

/*****************************************************************************/
// const node1 = new Node(42);

// 42

// linkedListFind(node1, 100); // false

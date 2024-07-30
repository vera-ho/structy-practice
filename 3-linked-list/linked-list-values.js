// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

// approach - recursively
// traverse linked list and push each value into an array

// time complexity: linear O(n)
// space complexity: linear O(n)
const linkedListValuesRecursive = (head) => {
  if (!head) return [];
  return [head.val, ...linkedListValuesRecursive(head.next)]
};

const linkedListValues = head => {
  const values = [];
  let currentNode = head;
  
  while (currentNode) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }
  
  return values;
}

/*************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

/*************************************************/
// const x = new Node("x");
// const y = new Node("y");

// x.next = y;

// x -> y

// linkedListValues(x); // -> [ 'x', 'y' ]

/*************************************************/
// const q = new Node("q");

// q

// linkedListValues(q); // -> [ 'q' ]

/*************************************************/
// linkedListValues(null); // -> [ ]

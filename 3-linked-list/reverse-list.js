// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Write a function, reverseList, that takes in the head of a linked list as an argument.
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

// approach
// track current, prev and next nodes and use them to flip the .next values for each nodes
// iterate though the list flipping next values until the current node is null and return the prev node
// recursively: when the end (head = null) is reached, return the prev node

// time complexity: linear O(n)
// space complexity: O(n) linear for recursive, O(1) constant for iterative
const reverseList = (head) => {
  let prev = null;
  let current = head;
  
  while (current) {
    let next = current.next;
    current.next = prev; 
    prev = current;
    current = next;
  }
  
  return prev;
}

const reverseListRec = (head, prev = null) => {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverseListRec(next, head)
};

/*****************************************************************************/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// a -> b -> c -> d -> e -> f

// reverseList(a); // f -> e -> d -> c -> b -> a

/*****************************************************************************/
// const x = new Node("x");
// const y = new Node("y");
// x.next = y;

// x -> y

// reverseList(x); // y -> x

/*****************************************************************************/
// const p = new Node("p");

// p

// reverseList(p); // p

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time complexity: O(n) 
// Space complexity: O(1)
// Iterative solution
const reverseList = (head) => {
    let prev = null;
    let next = current = head;
    
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
};

// Time complexity: O(n) 
// Space complexity: O(n)
// Recursive solution
const reverseListRecurseive = (head, prev = null) => {
    if(!head) return prev;
    
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
  };

  // Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
// approach
// track current, prev and next nodes and use them to flip the .next values for each nodes
// iterate though the list flipping next values until the current node is null and return the prev node
// recursively: when the end (head = null) is reached, return the prev node
// time complexity: linear O(n)
// space complexity: O(n) linear for recursive, O(1) constant for iterative
const reverseList2 = (head) => {
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

const reverseList2Rec = (head, prev = null) => {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head)
};
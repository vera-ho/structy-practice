// Time complexity: O(n) linear
// Space complexity: O(1) constant
// Iterative solution
const isUnivalueList = (head) => {
    let current = head;
    while(current && current.next) {
        if(current.val !== current.next.val) return false;
        current = current.next
    }
    return true;
};

// Time complexity: O(n) linear
// Space complexity: O(n) constant
// Recursive solution
const isUnivalueListRecursive = (head, prev = null) => {
    if(!head) return true;
    if(prev && prev.val !== head.val) return false;
    return isUnivalueList(head.next, head);
  };


// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
// You may assume that the input list is non-empty.
// Approach:
// Traverse the list and compare each value to the first value
// Return true if we reach the end without seeing a different value
// Time complexity: linear O(n)
// Space complexity: constant O(1)
const isUnivalueList2 = (head) => {
  let current = head;
  
  while (current) {
    if (current.val != head.val) return false;
    current = current.next;
  }
  
  return true;
};

const isUnivalueList2Rec = (head) => {
  if (!head) return true;
  const next = head.next;
  if (next && head.val != next.val) return false;
  return isUnivalueList(next);
};
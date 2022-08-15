// // Time complexity: O(n) linear
// // Space complexity: O(1) constant
// // Iterative solution
const linkedListFind = (head, target) => {
  let current = head;
  while(current) {
        if(target === current.val) return true;
        current = current.next;
  }
  return false;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear (callstack)
// Recursive solution
const linkedListFindRecursive = (head, target) => {
    if(!head) return false;
    if(target === head.val) return true
    else return linkedListFind(head.next, target);
};
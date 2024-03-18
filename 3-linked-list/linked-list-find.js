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

// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
// approach
// iterate through list and check if each value is equal to the target
// return true if value is found, false otherwise
// time complexity: linear O(n)
// space complexity: constant O(n) (iterative) or linear O(n) (recursive)
const linkedListFind2Rec = (head, target) => {
  if (!head) return false;
  return head.val === target || linkedListFind(head.next, target)
};

const linkedListFind2 = (head, target) => {
  let currentNode = head;
  
  while (currentNode) {
    if(currentNode.val === target) return true;
    currentNode = currentNode.next;
  }
  
  return false;
};
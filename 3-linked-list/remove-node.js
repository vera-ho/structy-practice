// Time complexity: O(n) linear
// Space complexity: O(1) constant
// Iterative solution
const removeNode = (head, targetVal) => {
    let current = head;
    let prevNode = null;
    
    while(current) {
        if(current.val === targetVal) {
            if(current === head) return current.next;
            prevNode.next = current.next;
            return head;
        }
        
        prevNode = current;
        current = current.next;
    }
};

// Time complexity: O(n) linear
// Space complexity: O(n) constant
// Recursive solution
const removeNodeRecursive = (head, targetVal) => {
    if(!head) return null;
    if(head.val === targetVal) return head.next
    
    head.next = removeNode(head.next, targetVal)
    return head;
};
  
// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.
// Do this in-place.
// You may assume that the input list is non-empty.
// You may assume that the input list contains the target.
// Approach:
// Use pointers to hold current, previous and next nodes
// Iterate through list and check for target value
// When the current value matches target value, set the prev node's next to the next node and return head early. If the target value is in the head node, set the new head to head's next node
// Time complexity: linear O(n)
// Space complexity: constant O(1)
const removeNode2 = (head, targetVal) => {
  let prev = null;
  let current = head;
  let next = head.next;
  
  // Loop while current node is not null
  while (current) {
    // Check if current value is the same as target value
    if (current.val === targetVal) {
      // If target is found, set the previous node's next to the next node (skipping over current node) or head contains the target, set head to the next node
      if (prev) {
        prev.next = next;      
      } else {
        head = next;
      }
      return head;
    }
    
    // If the current value is not the same as the target value, increment pointers
    prev = current;
    current = current.next;
    next = current.next;
  }
};

// Time complexity: linear O(n)
// Space complexity: linear O(n)
const removeNode2Rec = (head, targetVal) => {
  if (!head) return null;
  
  // if the node value matches target, skip it by returning the next node
  if (head.val === targetVal) return head.next;
  
  // continue looking for the target value and then return the head once its found
  head.next = removeNode(head.next, targetVal);
  return head;
};
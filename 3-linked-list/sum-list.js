// Approach
// * Iterative
//      - Pointer to track current node
//      - Variable to hold running sum
//      - Loop until tail is found, adding each node's value to running sum, then return sum
// * Recursive
//      - If node exists, call function with next node
//      - Take return value (which is running sum of the rest of the list), and add to own value
//      - If node doesn't exist, return 0;

// Time complexity: O(n) linear
// Space complexity: O(1) constant
// Iterative solution
const sumList = (head) => {
    let sum = 0;
    let current = head;
    
    while(current) {
        sum += current.val;
        current = current.next
    }
    
    return sum;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear - due to callstack
// Recursive solution
const sumListRecursive = (head) => {
    if(!head) return 0;
    return head.val + sumListRecursive(head.next)
};


// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
// approach
// Iterate through each node of the linked list and add values as we go along
// time complexity: linear O(n)
// space complexity: constant O(n)
const sumList2 = (head) => {
  let sum = 0;
  let currentNode = head;
  
  while (currentNode) {
    sum += currentNode.val;
    currentNode = currentNode.next;
  }
  
  return sum;
};

const sumList2Rec = (head) => {
  if (!head) return 0;
  return head.val + sumList(head.next);
};
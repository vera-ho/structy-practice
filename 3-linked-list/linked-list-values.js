// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative approach
const linkedListValues = (head) => {
    let current = head;
    let values = [];
    
    while(current) {
        values.push(current.val)
        current = current.next
    }
    
    return values;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive approach
const linkedListValuesRecursive = (head) => {
    let values = [];
    fillValues(head, values);
    return values;
  };
  
const fillValues = (head, values) => {
    if(!head) return;
    values.push(head.val);
    fillValues(head.next, values);
}

// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.
// approach - recursively
// traverse linked list and push each value into an array
// time complexity: linear O(n)
// space complexity: linear O(n)
const linkedListValues2 = (head) => {
  if (!head) return [];
  return [head.val, ...linkedListValues(head.next)]
};
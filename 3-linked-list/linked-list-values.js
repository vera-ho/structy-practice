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
const linkedListValues = (head) => {
    let values = [];
    fillValues(head, values);
    return values;
  };
  
const fillValues = (head, values) => {
    if(!head) return;
    values.push(head.val);
    fillValues(head.next, values);
}
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time complexity: O(n) linear
// Space complexity: O(1) constant
// Iterative solution
const getNodeValue = (head, index) => {
    let count = 0;
    let current = head;
    
    while(current) {
        if(count === index) return current.val;
        current = current.next;
        count++;
    }
    
    return null;
};

// Time complexity: O(n) linear
// Space complexity: O(n) constant
// Recursive solution
const getNodeValueRecursive = (head, index) => {
    if(!head) return null;
    if(index === 0) return head.val
    else return getNodeValue(head.next, index - 1)
  };
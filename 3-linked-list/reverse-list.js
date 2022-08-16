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
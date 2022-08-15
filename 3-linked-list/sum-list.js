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
const sumList = (head) => {
    if(!head) return 0;
    return head.val + sumList(head.next)
};
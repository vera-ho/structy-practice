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
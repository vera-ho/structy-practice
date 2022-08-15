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


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
  
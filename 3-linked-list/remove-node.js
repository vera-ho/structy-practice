// Time complexity: O(n) linear
// Space complexity: O(1) constant
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
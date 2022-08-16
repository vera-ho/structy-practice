// Time complexity: O(n) linear
// Space complexity: O(1) constant
// Iterative solution
const isUnivalueList = (head) => {
    let current = head;
    while(current && current.next) {
        if(current.val !== current.next.val) return false;
        current = current.next
    }
    return true;
};

// Time complexity: O(n) linear
// Space complexity: O(n) constant
// Recursive solution
const isUnivalueListRecursive = (head, prev = null) => {
    if(!head) return true;
    if(prev && prev.val !== head.val) return false;
    return isUnivalueList(head.next, head);
  };
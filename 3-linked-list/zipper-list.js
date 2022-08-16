// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time complexity: O(n) linear - O( min(n, m) )
// Space complexity: O(1) constant
// Iterative solution
const zipperLists = (head1, head2) => {
    let current1 = head1.next;
    let current2 = head2;
    let ptr = head1;
    let count = 0;
    
    while(current1 && current2) {
        if(count % 2 === 0) {
            ptr.next = current2;
            ptr = ptr.next;
            current2 = current2.next;
        } else {
            ptr.next = current1;
            ptr = ptr.next;
            current1 = current1.next;
        }
        count++;
    }
    
    current1 ? ptr.next = current1 : ptr.next = current2
    return head1;
};


// Time complexity: O(n) linear - O( min(n, m) )
// Space complexity: O(n) linear - O( min(n, m) )
// Recursive solution
const zipperListsRecursive = (head1, head2) => {
    if(!head1 && !head2) return null;
    if(!head1) return head2;
    if(!head2) return head1;
    
    let next1 = head1.next;
    let next2 = head2.next;
    
    head1.next = head2;
    head2.next = zipperLists(next1, next2)
    
    return head1;
};
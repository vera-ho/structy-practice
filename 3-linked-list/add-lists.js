// Time complexity: O(n) linear - O( max(n, m) )
// Space complexity: O(n) linear - O( max(n, m) )
// Recursive solution
const addLists = (head1, head2, carry = 0) => {
    if(!head1 && !head2 && !carry) return null;
    
    const val1 = head1 ? head1.val : 0;
    const val2 = head2 ? head2.val : 0;
    
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    
    const next1 = head1 ? head1.next : null;
    const next2 = head2 ? head2.next : null;
    const node = new Node(digit);
    
    node.next = addLists(next1, next2, carry)
    return node;
}
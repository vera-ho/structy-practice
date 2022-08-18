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

// Time complexity: O(n) linear - O( max(n, m) )
// Space complexity: O(n) linear - O( max(n, m) )
// Iterative solution
const addListsRecursive = (head1, head2) => {
    let dummy = new Node(null);
    let tail = dummy;
    let current1 = head1;
    let current2 = head2;
    let carry = 0;
    
    while(current1 || current2 || carry) {
      let val1 = current1 ? current1.val : 0;
      let val2 = current2 ? current2.val : 0;
      let sum = val1 + val2 + carry;
      let digit = sum % 10;
      let node = new Node(digit);
      
      carry = sum > 9 ? 1 : 0;
      tail.next = node;
      tail = tail.next;
      
      if(current1) current1 = current1.next;
      if(current2) current2 = current2.next;
    }
    
    return dummy.next;
  };
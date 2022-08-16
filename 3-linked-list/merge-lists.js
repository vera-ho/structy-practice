class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
  
const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);

q.next = r;
r.next = s;
s.next = t;
  
// Time complexity: O(n) linear - O( min(n, m) )
// Space complexity: O(1) constant
// Iterative solution
const mergeLists = (head1, head2) => {
    let head = new Node();
    let ptr = head;
    let curr1 = head1;
    let curr2 = head2;

    while(curr1 && curr2) {
        if(curr1.val > curr2.val) {
            ptr.next = curr2;
            ptr = curr2;
            curr2 = curr2.next;
        } else {
            ptr.next = curr1;
            ptr = curr1;
            curr1 = curr1.next;
        }
    }

    curr1 ? ptr.next = curr1 : ptr.next = curr2
    return head.next;
};

// Time complexity: O(n) linear - O( min(n, m) )
// Space complexity: O(n) linear - O( min(n, m) )
// Recursive solution
const mergeListsRecursive = (head1, head2) => {
    if(!head1 && !head2) return null;
    if(!head1) return head2;
    if(!head2) return head1;
    
    if(head1.val > head2.val) {
      let next2 = head2.next;
      head2.next = mergeLists(head1, next2);
      return head2;
    } else {
      let next1 = head1.next;
      head1.next = mergeLists(next1, head2);
      return head1;
    } 
  };

mergeLists(a, q)
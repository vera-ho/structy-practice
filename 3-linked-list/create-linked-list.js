// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative solution
const createLinkedList = (values) => {
    if(!values) return null;
    let head = current = null;
    
    for(let i = 0; i < values.length; i++) {
        let node = new Node(values[i]);
        if(i === 0) {
            head = node;
            current = head;
        } else {
            current.next = node;
            current = current.next;
        }
    }
    return head;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Iterative solution with dummy head
const createLinkedListWithDummy = (values) => {
    let dummy = new Node(null);
    let tail = dummy;
    
    for(let val of values) {
        tail.next = new Node(val)
        tail = tail.next;
    }
    
    return dummy.next;
};

// Time complexity: O(n^2) quadratic (due to slice)
// Space complexity: O(n) linear
// Recursive solution
const createLinkedListRecursive1 = (values) => {
    if(values.length === 0) return null;
    const head = new Node(values[0])
    head.next = createLinkedList(values.slice(1))
    return head;
};

// Time complexity: O(n) linear
// Space complexity: O(n) linear
// Recursive solution
const createLinkedListRecursive2 = (values, index = 0) => {
    if(values.length === index) return null;
    const head = new Node(values[index])
    head.next = createLinkedList(values, index + 1)
    return head;
  };
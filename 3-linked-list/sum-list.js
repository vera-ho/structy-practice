// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
// The function should return the total sum of all values in the linked list.

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

/*****************************************************************************/
// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

// sumList(a); // 19

/*****************************************************************************/
// const x = new Node(38);
// const y = new Node(4);

// x.next = y;

// 38 -> 4

// sumList(x); // 42

/*****************************************************************************/
// const z = new Node(100);

// 100

// sumList(z); // 100

/*****************************************************************************/
// sumList(null); // 0

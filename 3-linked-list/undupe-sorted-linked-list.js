// Write a function that takes in a linked list that contains values in increasing order. The function should return a new linked list containing the original values, with duplicates removed. The relative order of values in the resulting linked list should be unchanged.

// Approach
// Use a set to track values that are already in the new linked list
// Iterate through the input linked list and check values
//  If the value is in the set, continue iterating
//  If the value is not in the set, create a new node and add it to the new linked list

// Time complexity: O(n) linear
// Space complexity: O(n) linear
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const undupeSortedLinkedList = (head) => {
    const seenValues = new Set();
    const dummyHead = new Node();
    let current = head;
    let currNew = dummyHead;

    while (current) {
        const value = current.val;
        if (!seenValues.has(value)) {
            const newNode = new Node(value);
            currNew.next = newNode;
            currNew = currNew.next;
            seenValues.add(value);
        }

        current = current.next;
    }

    return dummyHead.next;
};

// ************************************************************ //
const a = new Node(4);
const b = new Node(4);
const c = new Node(6);
const d = new Node(6);
const e = new Node(6);
const f = new Node(7);
const g = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

// 4 -> 4 -> 6 -> 6 -> 6 -> 7 -> 7

undupeSortedLinkedList(a); // 4 -> 6 -> 7
// ************************************************************ //
const w = new Node(5);
const x = new Node(5);
const y = new Node(5);
const z = new Node(8);

w.next = x;
x.next = y;
y.next = z;

// 5 -> 5 -> 5 -> 8

undupeSortedLinkedList(x); // 5 -> 8
// ************************************************************ //
const p = new Node(10);
const q = new Node(20);
const r = new Node(30);

p.next = q;
q.next = r;

// 10 -> 20 -> 30

undupeSortedLinkedList(p); // 10 -> 20 -> 30

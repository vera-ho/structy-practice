// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

// Approach
// Track the streak value and max streak value and iterate through the entire list.
// When the value changes, check if the streak surpoasses the max streak and if so, save it.
// Reset streak to 1 (counting current value) and iterate pointer nodes.

// Time complexity: linear O(n)
// Space complexity: constant O(1)
const longestStreak = (head) => {
  let maxStreak = 0;
  let streak = 0;
  let current = head;
  let prev = head;
  
  while (current) {
    if (current.val === prev.val) {
      streak++; 
    } else {
      streak = 1;
    }
    
    if (streak > maxStreak) maxStreak = streak;
    prev = current;
    current = current.next;
  }

  return maxStreak;
};

/*****************************************************************************/
// const a = new Node(5);
// const b = new Node(5);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(7);
// const f = new Node(6);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

// longestStreak(a); // 3

/*****************************************************************************/
// const a = new Node(3);
// const b = new Node(3);
// const c = new Node(3);
// const d = new Node(3);
// const e = new Node(9);
// const f = new Node(9);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// 3 -> 3 -> 3 -> 3 -> 9 -> 9

// longestStreak(a); // 4

/*****************************************************************************/
// const a = new Node(9);
// const b = new Node(9);
// const c = new Node(1);
// const d = new Node(9);
// const e = new Node(9);
// const f = new Node(9);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

// longestStreak(a); // 3

/*****************************************************************************/
// const a = new Node(5);
// const b = new Node(5);

// a.next = b;

// 5 -> 5

// longestStreak(a); // 2

/*****************************************************************************/
// const a = new Node(4);

// 4

// longestStreak(a); // 1

/*****************************************************************************/
// longestStreak(null); // 0

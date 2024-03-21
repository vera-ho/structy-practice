// Time complexity: O(n) linear
// Space complexity: O(1) constant
const longestStreak = (head) => {
    let maxStreak = streak = 0;
    let current = head;
    let prev = null;
    
    while(current) {
        if(current.val === prev) {
            streak++;
        } else {
            streak = 1;
        }
      
        if(streak > maxStreak) maxStreak = streak
        prev = current.val;
        current = current.next;
    }
    
    return maxStreak;
};

// Time complexity: O(n) linear
// Space complexity: O(1) constant
const longestStreak2 = (head) => {
    let count = maxCount = 0;
    let current = prev = head;
    
    while(current) {
        if(current.val === prev.val) count++
        else count = 1
        
        if(count > maxCount) maxCount = count;
        prev = current;
        current = current.next;
    }
    return maxCount;
};

// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
// Approach
// Track the streak value and max streak value and iterate through the entire list.
// When the value changes, check if the streak surpoasses the max streak and if so, save it.
// Reset streak to 1 (counting current value) and iterate pointer nodes.
// Time complexity: linear O(n)
// Space complexity: constant O(1)
const longestStreak3 = (head) => {
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
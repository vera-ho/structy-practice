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
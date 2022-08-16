// Time complexity: O(n) linear
// Space complexity: O(1) constant
// Iterative solution
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
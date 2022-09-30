/** Time complexity: O(n) linear
 *  Space complexity: O(n) linear
 *  Approach: 
 *    - Assumption: all node values are unique
 *    - Iterate through linked list and add values to set
 *    - If end of list is reached (null found), not cyclic
 *    - If a value is found already in set, list is cyclic
 */
 const linkedListCycle = (head) => {
    let visited = new Set();
    let current = head;
    
    while(current) {
        if(visited.has(current.val)) return true;
        visited.add(current.val);
        current = current.next;
    }
    
    return false;
};
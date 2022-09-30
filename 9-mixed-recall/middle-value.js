/** Time complexity: 
 *  Space complexity: 
 *  Approach: 
 *    - Iterate through linked list and save values to array
 *    - Return the value at the halfway point
 */
 const middleValue = (head) => {
    const values = [];
    let current = head;
    
    while(current) {
        values.push(current.val);
        current = current.next;
    }
    
    return values[Math.floor(values.length / 2)];
};

/** Time complexity: O(n) linear
 *  Space complexity: O(1) constant
 *  Approach: 
 *    - Use two pointers that move at different speeds through linked list
 *    - Exit loop when the faster node is null or has no next node
 */
 const middleValueFaster = (head) => {
    let slow = head, 
        fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow.val;
};
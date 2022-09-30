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
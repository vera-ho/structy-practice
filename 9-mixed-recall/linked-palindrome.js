/** Time complexity: O(n) linear
 *  Space complexity: O(n) linear
 *  Approach: 
 *    - Traverse linked list and track values by saving them
 *    - Check if reversed is equal to original
 */
 const linkedPalindrome = (head) => {
    let values = [];
    let current = head;
    
    while(current) {
        values.push(current.val);
        current = current.next;
    }
  
    return values.join('') == values.reverse().join('');
};
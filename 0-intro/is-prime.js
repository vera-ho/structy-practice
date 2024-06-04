// Time complexity: O(n) linear
// Space complexity: O(1) constant
/** Approach:
 *      - Only numbers >= 2 can be a prime number if they have no factors other than 1 and n
 *      - Loop through numbers from 2 to n - 1
 *      - If any factors are round, it is not a prime number
 */
const isPrime = (n) => {
    if(n < 2) return false;
    
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    
    return true;
}
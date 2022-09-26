// Approach: Take each possible operand and get difference. Then run Two Sum to see if 
// the array returns true with remaining numbers + updated target
function ThreeSum(arr) { 
    let target = arr[0];
    let numbers = arr.slice(1);
    let ctr = {};
  
    // for(let i = 0; i < numbers.length; i++) {
    //   if(!ctr[numbers[i]]) ctr[numbers[i]] = [];
    //   ctr[numbers[i]].push(i)
    // }
  
    for(let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        let section = numbers.slice(i);
    
        let possible = TwoSum(section, diff, ctr);
        if(possible) return true;
        else {
            if(!ctr[numbers[i]]) ctr[numbers[i]] = [];
            ctr[numbers[i]].push(i);
        }
    }
  
    return false;
}

function TwoSum(arr, target, ctr) {
    for(let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        let avail = ctr[diff] ? ctr[diff].length : 0;
        if(avail) return true;
    }
    return false;
}
  
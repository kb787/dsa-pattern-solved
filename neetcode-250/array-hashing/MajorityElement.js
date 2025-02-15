{
  /*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2  
  */
}

var majorityElement = function(nums) {
    
    nums.sort((a, b) => a - b);

    let hashSet = new Map();
    let numCount = 1;
    let uniqueElement = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            numCount++;
        } else {
            hashSet.set(uniqueElement, numCount);
            uniqueElement = nums[i];
            numCount = 1;
        }
    }

    hashSet.set(uniqueElement, numCount);

    let maxRepCount = Math.ceil(nums.length / 2);
    for (let [key, value] of hashSet) {
        if (value >= maxRepCount) {
            return key;
        }
    }
    return -1; 
};

{
    /*
    Appraoch 
     - Sort the array 
     - Look for consecutive identical elements for consecutive index
     - If same elements exists for two consecutive position increase the value of numCount until a unique element is found
     - Push the numValue and countValue in hashmap 
     - Traverse key of hashmap check for condition value > Ceil(num.length/2)
     - Return key 
    */
}


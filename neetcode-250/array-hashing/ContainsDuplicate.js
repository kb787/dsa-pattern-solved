{
  /*
   Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

    */
}

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let isRepeating = false;
    let dummySet = new Set();
    let i = 0;
    while (i < nums.length) {
      if (dummySet.has(nums[i])) {
        isRepeating = true;
      } else {
        dummySet.add(nums[i]);
      }
      i++;
    }
    return isRepeating;
  }
}

{
  /*
  Approach 
  Maintain a set and initialize isRepeating to false by default
  Traverse the array from start and check whether it already exists in set
  If not then push it in set else change isRepeating to true
  */
}

{
  /*
   Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
   

   */
}

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let numIndexMap = new Map(); // Map to store number and its index
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]; // Find the complement needed for the target
      if (numIndexMap.has(complement)) {
        // If complement is already in the map, return the indices
        return [numIndexMap.get(complement), i];
      }
      numIndexMap.set(nums[i], i); // Store the current number with its index
    }
    return []; // This will never execute as the problem guarantees a solution
  }
}

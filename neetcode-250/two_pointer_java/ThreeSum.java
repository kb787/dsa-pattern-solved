/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 */

import java.util.*;

public class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums); // Sort the array
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for the first element
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            int left = i + 1; // Pointer to the element after nums[i]
            int right = nums.length - 1; // Pointer to the last element

            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];

                if (sum == 0) {
                    // Found a valid triplet
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // Skip duplicates for the second element
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    // Skip duplicates for the third element
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }

                    // Move pointers
                    left++;
                    right--;
                } else if (sum < 0) {
                    // If the sum is less than zero, move the left pointer to the right
                    left++;
                } else {
                    // If the sum is greater than zero, move the right pointer to the left
                    right--;
                }
            }
        }

        return result;
    }
}

/*
    Data Structure : Array,List 
    Important Methods :
    1. Arrays.sort - sorts the array in ascending order
    2. Arrays.asList - returns a fixed-size list backed by the specified array

    Approach :
    1. Sort the array in ascending order.
    2. Check for consecutive duplicates for the first element.
    3. Initialize start, left, and right pointers to 0, 1, and arr.length - 1 respectively.
    4. If the sum of the elements at the start, left, and right pointers is equal to 0, add the triplet to the result list.
    5. Skip duplicates for the second and third elements.
    6. Move the left and right pointers based on the sum.
    7. Return the result list.
 */



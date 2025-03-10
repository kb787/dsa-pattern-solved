/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores). 
*/
public class RemoveDuplicates {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int uniqueCount = 1;
        int writePointer = 1;

        for (int readPointer = 1; readPointer < nums.length; readPointer++) {
            if (nums[readPointer] != nums[readPointer - 1]) {
                nums[writePointer] = nums[readPointer];
                writePointer++;
                uniqueCount++;
            }
        }

        return uniqueCount;
    }
}

/*
 * Data Structure : Array
 * Approach :
 * 1. Initialize a variable uniqueCount to 1 and writePointer to 1.
 * 2. Iterate through the array from the second element.
 * 3. If the current element is not equal to the previous element, assign the
 * current element to the writePointer index.
 * 4. Increment the writePointer and uniqueCount.
 * 5. Return the uniqueCount.
 * 
 * Complexity Analysis:
 * Time Complexity: O(n), where n is the length of the input array.
 * Space Complexity: O(1).
 */
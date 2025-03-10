/*
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use 
O
(
1
)
O(1) additional space.

Example 1:

Input: numbers = [1,2,3,4], target = 3

Output: [1,2]

 */

import java.util.*;

public class TwoIntegerSumTwo {
    public int[] twoSum(int[] numbers, int target) {
        List<Integer> listy = new ArrayList<Integer>();
        int startPointer = 0;
        int endPointer = numbers.length - 1;
        while (startPointer < endPointer) {
            if (numbers[startPointer] + numbers[endPointer] == target) {
                listy.add(startPointer + 1);
                listy.add(endPointer + 1);
                break;
            } else if (numbers[startPointer] + numbers[endPointer] > target) {
                endPointer--;
            } else if (numbers[startPointer] + numbers[endPointer] < target) {
                startPointer++;
            }
        }
        int maxSize = listy.size();
        int[] newArr = new int[maxSize];
        for (int i = 0; i < maxSize; i++) {
            newArr[i] = listy.get(i);
        }
        return newArr;
    }
}

/*
 * Data Structure : Array,ArrayList
 * Important Methods :
 * 1.add(int element) : It is used to add the specified element to the end of
 * the list.
 * 2.get(int index) : It is used to get the element of a specified index from
 * the list.
 * 3.size() : It is used to get the number of elements in the list.
 * 
 * Approach :
 * 1.Initialize two pointers one pointing start and another end
 * 2.Verify if array value at startIndex + endIndex is equal to target
 * 3.If yes, add the index of start and end to the list and break the loop
 * 4.If the sum is greater than target, decrement the end pointer
 * 5.If the sum is less than target, increment the start pointer
 * 6.Convert the list to an array and return the array
 */
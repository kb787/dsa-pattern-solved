/*
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
Return the minimum number of boats to carry every given person.
Example 1:
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
 */

import java.util.*;

public class MinBoats {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);

        int left = 0; // Pointer to the lightest person
        int right = people.length - 1; // Pointer to the heaviest person
        int noOfBoats = 0;

        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                left++;
            }
            right--;
            noOfBoats++;
        }
        return noOfBoats;
    }
}

/*
 * Data Structure : Array
 * Important Methods :
 * 1. Arrays.sort - sorts the array in ascending order
 * Approach :
 * 1. Sort the array in ascending order.
 * 2. Initialize two pointers left and right to 0 and arr.length - 1
 * respectively.
 * 3. If the sum of the weights of the people at the left and right pointers is
 * less than or equal to the limit, increment the left pointer.
 * 4. Decrement the right pointer.
 * 5. Increment the number of boats.
 * 6. Return the number of boats.
 * 
 */

import java.util.ArrayList;
import java.util.List;

public class KClosestElement {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        // Initialize pointers
        int left = 0;
        int right = arr.length - 1;

        // Use binary search to find the position of x or the closest element
        while (right - left >= k) {
            if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
                left++;
            } else {
                right--;
            }
        }

        // Collect the k closest elements
        List<Integer> result = new ArrayList<>();
        for (int i = left; i <= right; i++) {
            result.add(arr[i]);
        }
        return result;
    }
}

/*
 * Data Structure : ArrayList
 * Appraoch
 * 1. Initialize two pointers left and right to 0 and arr.length - 1
 * respectively.
 * 2. If Math.abs(arr[left] - x) > Math.abs(arr[right] - x), increment left,
 * else decrement right.
 * 3. Continue until right - left >= k.
 * 4. Collect the k closest elements and return the result.
 * 
 * Important Methods
 * Math.abs - returns the absolute value of a number
 * add - adds an element to the list
 */

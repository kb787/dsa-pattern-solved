{
  /*
  Given a binary array arr[] (containing only 0s and 1s) and an integer k, you are allowed to flip at most k 0s to 1s. Find the maximum number of consecutive 1's that can be obtained in the array after performing the operation at most k times.
  Examples:
  Input: arr[] = [1, 0, 1], k = 1
  Output: 3
  Explanation: Maximum subarray of consecutive 1's is of size 3 which can be obtained after flipping the zero present at the 1st index.
  */
}

class Solution {
    findConsecutiveArrayLength(arr, k) {
        let maxConsecutiveOnes = 0, left = 0, zerosFlipped = 0;

        for (let right = 0; right < arr.length; right++) {
            if (arr[right] === 0) {
                zerosFlipped++;
            }
            while (zerosFlipped > k) {
                if (arr[left] === 0) {
                    zerosFlipped--;
                }
                left++;
            }
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes, right - left + 1);
        }

        return maxConsecutiveOnes;
    }
    maxOnes(arr, k) {
        return this.findConsecutiveArrayLength(arr, k);
    }
}
{
    /* 
    Approach 
    This uses a sliding window technique where two ends right and left are maintained
    Left is initialized to zero and Right end is executed to loop fashion from start index to max length of array
    When at right index array value is zero the Zero-flipped-counter is increased 
    But at a certain stage when Zero-flipped-counter exceeds maximum flipping allowed and still the zero is encountered 
    the Zero-flipped-counter is made to decrease 
    The Left end in increased until Zero-flipped-counter is equal to maximum flipped allowed
    Then max-consecutive ones is calculated using max function between maxConsecutiveOnes, right - left + 1
    */
}

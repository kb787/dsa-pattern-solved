/*
Given a string s, return true if it is a palindrome, otherwise return false.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:
Input: s = "Was it a car or a cat I saw?"
Output: true
 */

 class Solution {
    public boolean isPalindrome(String s) {
        char[] chary = s.toLowerCase().toCharArray();
        int startPointer = 0;
        int endPointer = s.length() - 1;

        while (startPointer < endPointer) {
            // Skip non-alphanumeric characters from the start
            while (startPointer < endPointer && !isAlphanumeric(chary[startPointer])) {
                startPointer++;
            }
            // Skip non-alphanumeric characters from the end
            while (startPointer < endPointer && !isAlphanumeric(chary[endPointer])) {
                endPointer--;
            }
            // Compare characters
            if (chary[startPointer] != chary[endPointer]) {
                return false;
            }
            // Move pointers
            startPointer++;
            endPointer--;
        }
        return true;
    }

    // Helper function to check if a character is alphanumeric
    private boolean isAlphanumeric(char c) {
        return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
}

/*
   Data Structure : String
   Important Methods :
   1. toLowerCase - converts the string to lowercase
   2. toCharArray - converts the string to a character array

   Approach :
   1. Convert the string to lowercase and convert it to a character array.
   2. Create a function isAlphanumeric to check if a character is alphanumeric to ignore special characters
   3. Initialize two pointers startPointer and endPointer to 0 and s.length() - 1 respectively.
   4. Increment the startPointer if the character at the startPointer is not alphanumeric.
   5. Decrement the endPointer if the character at the endPointer is not alphanumeric.
   6. Compare the characters at the startPointer and endPointer.
   7. If they are same change the boolean 
   8. Increment the startPointer and decrement the endPointer.
   9. Return the boolean.
 */

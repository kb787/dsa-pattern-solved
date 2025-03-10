/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.
Example 1:

Input: s = "aba"
Output: true
Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
 */

public class ValidPalindromeTwo {
        public boolean validPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
            }
            left++;
            right--;
        }
        return true;
    }
    
    private boolean isPalindrome(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}

/*
    Data Structure : String 
    Important Methods :
    chartAt - returns the character at the specified index

    Approach :
   1. Create a function isPalindrome to check if a string is palindrome by two pointer technique
   2. Create a function validPalindrome by initializing two pointers left and right to 0 and s.length() - 1 respectively
   3. If pointer at left is not equal to pointer at right, return result by OR operation of values isPalindrome(s, left + 1, right) and isPalindrome(s, left, right - 1)

 */


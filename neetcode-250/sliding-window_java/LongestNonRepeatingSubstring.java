/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1. 

 */

import java.util.HashSet;

class LongestNonRepeatingSubstring {
    public int lengthOfLongestSubstring(String s) {
        int lengthy = 0; // Initialize to 0, as the length of the longest substring can be 0 for an empty
                         // string
        int i = 0;
        int start = 0; // Start index of the current substring
        HashSet<Character> s1 = new HashSet<>(); // Use Character instead of String for char array

        while (i < s.length()) {
            char currentChar = s.charAt(i);
            if (!s1.contains(currentChar)) {
                s1.add(currentChar);
                i++;
                lengthy = Math.max(lengthy, s1.size()); // Update lengthy with the maximum size of the set
            } else {
                s1.remove(s.charAt(start)); // Remove the character at the start index
                start++; // Move the start index forward
            }
        }

        return lengthy;
    }
}

/*
 * Data Structure Hashset, String,Array
 * Important Methods
 * contains - boolean whether element exists or not
 * add - add element to the set
 * remove - remove element from the set
 * charAt - get the character at the index
 * 
 * Approach
 * 1. Initialize the start index, end index, and the length of the longest
 * substring to 0
 * 2. Create a hashset to store the characters of the substring
 * 3. Iterate through the string
 * 4. If the character is not in the hashset, add it to the hashset and update
 * the length of the longest substring
 * 5. If the character is in the hashset, remove the character at the start
 * index and move the start index forward
 * 6. Return the length of the longest substring
 */
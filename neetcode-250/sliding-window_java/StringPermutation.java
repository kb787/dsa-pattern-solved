import java.util.*;

/*
 Permutation in String
Solved 
Medium
You are given two strings s1 and s2.

Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

Both strings only contain lowercase letters.

Example 1:

Input: s1 = "abc", s2 = "lecabee"

Output: true
Copy
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

Example 2:

Input: s1 = "abc", s2 = "lecaabee"

Output: false
 */
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        // Edge case: If s1 is longer than s2, return false
        if (s1.length() > s2.length()) {
            return false;
        }

        // Frequency maps for s1 and a sliding window in s2
        HashMap<Character, Integer> map1 = new HashMap<>();
        HashMap<Character, Integer> map2 = new HashMap<>();

        // Populate map1 with frequencies of characters in s1
        for (char c : s1.toCharArray()) {
            map1.put(c, map1.getOrDefault(c, 0) + 1);
        }

        int left = 0;
        for (int right = 0; right < s2.length(); right++) {
            char c = s2.charAt(right);
            map2.put(c, map2.getOrDefault(c, 0) + 1);

            // If window size exceeds s1's length, shrink from the left
            if (right - left + 1 > s1.length()) {
                char leftChar = s2.charAt(left);
                map2.put(leftChar, map2.get(leftChar) - 1);
                if (map2.get(leftChar) == 0) {
                    map2.remove(leftChar);
                }
                left++;
            }

            // Check if both maps are equal
            if (areMapsEqual(map1, map2)) {
                return true;
            }
        }
        return false;
    }

    private boolean areMapsEqual(HashMap<Character, Integer> map1, HashMap<Character, Integer> map2) {
        if (map1.size() > map2.size())
            return false;
        for (char key : map1.keySet()) {
            if (!map2.containsKey(key) || !map2.get(key).equals(map1.get(key))) {
                return false;
            }
        }
        return true;

    }
}

/*
 * Data Structure HashMap, String
 * Important Methods
 * getOrDefault - get the value of the key if it exists, otherwise return the
 * default value
 * 
 * Approach
 * 1. Validate for string length
 * 2. Create two hashmaps to store the frequency of characters in s1 and the
 * sliding window in s2
 * 3. Populate map1 with the frequencies of characters in s1
 * 4. Iterate through s2
 * 5. Add the character to map2 and update the frequency
 * 6. If the window size exceeds s1's length, shrink the window from the left
 * 7. Check if both maps are equal
 * 8. Return true if the maps are equal, otherwise return false
 * 
 */

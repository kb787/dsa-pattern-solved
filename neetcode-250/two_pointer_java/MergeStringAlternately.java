/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

 */

public class MergeStringAlternately {
    public String mergeAlternately(String word1, String word2) {
        StringBuffer resultString = new StringBuffer();
        int firstPointer = 0;
        int secondPointer = 0;
        if (word1.length() > 0 && word2.length() > 0) {
            while (firstPointer < word1.length() && secondPointer < word2.length()) {
                resultString.append(word1.charAt(firstPointer));
                resultString.append(word2.charAt(secondPointer));
                firstPointer++;
                secondPointer++;
            }
            while (firstPointer < word1.length()) {
                resultString.append(word1.charAt(firstPointer));
                firstPointer++;
            }
            while (secondPointer < word2.length()) {
                resultString.append(word2.charAt(secondPointer));
                secondPointer++;
            }
        } else if (word1.length() > 0 && word2.length() == 0) {
            firstPointer = 0;
            while (firstPointer < word1.length()) {
                resultString.append(word1.charAt(firstPointer));
                firstPointer++;
            }
        } else if (word2.length() > 0 && word1.length() > 0) {
            secondPointer = 0;
            while (secondPointer < word2.length()) {
                resultString.append(word2.charAt(secondPointer));
                secondPointer++;
            }
        }
        return resultString.toString();
    }
}

/*
 * Data Structure : StringBuffer, String
 * Important Methods :
 * 1. append - appends the string representation of the argument to the string
 * buffer
 * 2. charAt - returns the character at the specified index
 * 
 * Approach :
 * 1. Initialize two pointers firstPointer and secondPointer to 0.
 * 2. If both the strings are not empty, iterate through both the strings and
 * append the characters alternatively.
 * 3. If one of the strings is empty, append the characters of the non-empty
 * string.
 * 4. Return the merged string.
 */

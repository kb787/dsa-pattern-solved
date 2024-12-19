{
    /*

Given a sorted array with possibly duplicate elements. The task is to find indexes of first and last occurrences of an element X in the given array.
Note: If the element is not present in the array return {-1,-1} as pair.

Example 1:

Input:
N = 9
v[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}
X = 5
Output:
2 5
Explanation:
Index of first occurrence of 5 is 2
and index of last occurrence of 5 is 5.
    */
}
class Solution {
    searchOccurencePush(v, key) {
        let indexArray = [];
        for (let i = 0; i < v.length; i++) {
            if (v[i] === key) {
                indexArray.push(i);
            }
        }
        return indexArray;
    }

     indexes(v, x) {
        let inputArray = this.searchOccurencePush(v, x);
        if (inputArray.length > 0) {
            return [inputArray[0], inputArray[inputArray.length - 1]];
        } else {
            return [-1];
        }
    }
}

{
    /*
    Approach 
    The function searchOccurencePush traverses the entire array and pushes the index value where the key element was found
    If the output of array searchOccurencePush is > 0 then first and last index are puhsed into output array
    Else an array of -1 element is returned
    */
}
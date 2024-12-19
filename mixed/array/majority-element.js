{
  /*
     Given an array arr. Find the majority element in the array. If no majority exists, return -1.

A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

Examples:

Input: arr[] = [3, 1, 3, 3, 2]
Output: 3
Explanation: Since, 3 is present more than n/2 times, so it is the majority element.

    */
}

class Solution {
  majorityElement(arr) {
    let candidate = null;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (count === 0) {
        candidate = arr[i];
        count = 1;
      } else if (arr[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === candidate) {
        count++;
      }
    }
    return count > arr.length / 2 ? candidate : -1;
  }
}

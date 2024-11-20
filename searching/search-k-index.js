{
  /*
Given a sorted array Arr[](0-index based) consisting of N distinct integers and an integer k, the task is to find the index of k, if its present in the array Arr[]. Otherwise, find the index where k must be inserted to keep the array sorted.
Example 1:
Input:
N = 4
Arr = {1, 3, 5, 6}
k = 5
Output: 2
    */
}
class Solution {
  findMaxValue(arr, N) {
    let maxValue = arr[0];
    for (let i = 1; i < N; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
    return maxValue;
  }

  findIsMax(arr, N, key) {
    let maxValue = this.findMaxValue(arr, N);
    return maxValue === key;
  }

  searchInsertK(arr, N, K) {
    let indexPosition = -1;
    for (let i = 0; i < N; i++) {
      if (arr[i] >= K) {
        indexPosition = i;
        break;
      }
    }
    if (indexPosition === -1) {
      indexPosition = N;
    }

    return indexPosition;
  }
}

{
  /*
    Approach
    Verify if key is greater than max value of array 
    If it is then place at the end position of array 
    If it is equal to or less than an element at particular element assign the index value of array element
    */
}

/* 
You are given a 2D array consisting of only 1's and 0's, where each row is sorted in non-decreasing order. You need to find and return the index of the first row that has the most number of 1s. If no such row exists, return -1.
Note: 0-based indexing is followed.

Examples:

Input: arr[][] = [[0, 1, 1, 1],
               [0, 0, 1, 1],
               [1, 1, 1, 1],
               [0, 0, 0, 0]]
Output: 2
Explanation: Row 2 contains 4 1's.
*/
class Solution {
  maxNumber(arr) {
    let maximumNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maximumNumber) {
        maximumNumber = arr[i];
      }
    }
    return maximumNumber;
  }
  countMaintain(arr) {
    const totalRows = arr.length;
    const countArray = []; // Initialize as an empty array

    for (let i = 0; i < totalRows; i++) {
      let countOccurence = 0; // Reset count for each row
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 1) {
          countOccurence++;
        }
      }
      countArray.push([countOccurence, i]); // Push the count and row index
    }
    return countArray;
  }
  rowWithMax1s(arr) {
    const countArrayOutput = this.countMaintain(arr); // Get counts and row indices
    const oneDimArray = countArrayOutput.map((entry) => entry[0]); // Extract counts as 1D array

    const maxElement = this.maxNumber(oneDimArray); // Find the maximum count
    if (maxElement === 0) {
      return -1;
    }
    for (let i = 0; i < countArrayOutput.length; i++) {
      if (countArrayOutput[i][0] === maxElement) {
        return countArrayOutput[i][1]; // Return the row index
      }
    }
  }
}

// Approach
// maxNumber finds maximum number in provided array
// countMaintain traverses entire array and returns a 2D matrix in form [1 occurence count,row position]
// rowWithMax1s transforms 2D matrix to 1D and returns row position with maximum 1 occurence

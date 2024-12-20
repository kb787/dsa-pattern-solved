class Solution {
  findMinimum(arr) {
    let minimumElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minimumElement) {
        minimumElement = arr[i];
      }
    }
    return minimumElement;
  }
  findMaximum(arr) {
    let maximumElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maximumElement) {
        maximumElement = arr[i];
      }
    }
    return maximumElement;
  }
  calculateMinimumCost(arr, k) {
    let maxLength = arr.length,
      minimumCost = 0,
      maximumCost = 0,
      minimumElement,
      maximumElement,
      outputArray = [];
    minimumElement = this.findMinimum(arr);
    maximumElement = this.findMaximum(arr);
    if (k === maxLength - 1) {
      outputArray.push(minimumElement);
      outputArray.push(maximumElement);
    } else {
    }
  }
}

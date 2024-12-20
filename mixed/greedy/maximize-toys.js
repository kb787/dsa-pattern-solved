{
  /*
    Given an array arr[ ] of length N consisting cost of N toys and an integer K depicting the amount with you. Your task is to find maximum number of toys you can buy with K amount. 
Example 1:

Input: 
N = 7 
K = 50
arr[] = {1, 12, 5, 111, 200, 1000, 10}
Output: 4
Explaination: The costs of the toys 
you can buy are 1, 12, 5 and 10.
    */
}
class Solution {
  toyCount(arr, N, K) {
    let i = 0,
      currentCost = 0,
      toyCount = 0;
    while (i < arr.length) {
      if (arr[i] + currentCost <= K) {
        currentCost = currentCost + arr[i];
        toyCount++;
      }
      i++;
    }
    return toyCount;
  }
}
// Approach
{
  /*
    Initialise totalCost as zero and toyCount as zero 
    For every iteration validate the condition totalCost+arr[i]<=K 
    If yes then do the sum operation and increase toyCount
    */
}

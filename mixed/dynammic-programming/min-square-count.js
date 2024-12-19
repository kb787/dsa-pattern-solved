{
  /*

     Problem Statement : 
      
     Given a number n, find the minimum number of perfect squares (square of an integer) that sum up to n. 
     Input: n = 100
     Output: 1
     Explanation: 10 * 10 = 100
     Input: n = 6
     Output: 3
     Explanation = 1 * 1 + 1 * 1 + 2 * 2 = 6 
    */
}

class Solution {
  MinSquares(n) {
    let sqrtAnswer = Math.sqrt(n);
    let count = 1;
    if (Number.isInteger(sqrtAnswer)) {
      return count;
    } else {
      let nearestPerfectSquare = Math.floor(Math.sqrt(n));
      let differenceNearestSquare =
        n - nearestPerfectSquare * nearestPerfectSquare;
      return count + this.MinSquares(differenceNearestSquare);
    }
  }
}
// Approach
{
  /*

    Validate whether the perfect square exists for a number 
    If exists return count as 1 
    If not then find the ceil value of square root of that number 
    Then find the nearest perfect square as ceil value of square 
    Difference from square as = Number - nearest perfect square 
    Then repeat the algo for Difference from square 
    */
}

{
  /*
    Problem Statement 
    Given a positive integer n, find the nth fibonacci number. Since the answer can be very large, return the answer modulo 1000000007.
    Note: for the reference of this question take first fibonacci number to be 1.
    Examples :
    Input: n = 2
    Output: 1 
    Explanation: 1 is the 2nd number of fibonacci series.
    */
}

class Solution {
  nthFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    let prev = BigInt(1);
    let curr = BigInt(1);
    for (let i = 3; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr <= Number.MAX_SAFE_INTEGER ? Number(curr) : curr.toString();
  }
}

{
  /*
    Approach 
    take 2 variables prev,current 
    next = prev+current 
    after iteration swap prev = current and current = next 
    */
}

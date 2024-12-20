{
  /*

Examples: 

Input : price[] = { 10, 7, 19 }, 
              k = 45.
Output : 4
A customer purchases 1 stock on day 1 for 10 rs, 
2 stocks on day 2 for 7 rs each and 1 stock on day 3 for 19 rs.Therefore total of
10, 7 * 2 = 14 and 19 respectively. Hence, 
total amount is 10 + 14 + 19 = 43 and number 
of stocks purchased is 4.

Input  : price[] = { 7, 10, 4 }, 
               k = 100.
Output : 6




    */
}
class Solution {
  findMaximumStocks(arr, amount) {
    let stockCount = 0,
      maxQuantity,
      i = 0,
      quantityReached,
      currentAmount;

    while (amount > 0 && i < arr.length) {
      maxQuantity = i + 1;
      quantityReached = 1;
      currentAmount = 0;

      while (
        quantityReached <= maxQuantity &&
        currentAmount + arr[i] <= amount
      ) {
        currentAmount += arr[i];
        quantityReached++;
        stockCount++;
      }

      amount -= currentAmount;
      i++;
    }

    return stockCount;
  }
}

let soll = new Solution();
let price = [7, 10, 14],
  k = 100;
console.log(soll.findMaximumStocks(price, k));

// Approach
{
  /*
    For every visit check for index , check for amount
    Amount value should be lesser than max amount and its quantity should be less than index
    If all of these condition satisfy then calculate current amount by array value*maxQuantity allowed
    Increment the iteration by 1
    */
}

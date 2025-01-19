{
  /*
You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.

Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Return the sum of the two numbers as a linked list.

Example 1:
Input: l1 = [1,2,3], l2 = [4,5,6]

Output: [5,7,9]

Explanation: 321 + 654 = 975.
    */
}
class Solution {
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    let sumList = new ListNode(-1); // Dummy node
    let current = sumList; // Pointer for building the result list
    let carry = 0; // To handle carry over

    while (l1 !== null || l2 !== null || carry > 0) {
      let sum = carry;

      if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
      }

      if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
      }

      carry = Math.floor(sum / 10); // Calculate carry
      current.next = new ListNode(sum % 10); // Create new node for the current digit
      current = current.next; // Move the pointer forward
    }

    return sumList.next; // Skip the dummy node
  }
}

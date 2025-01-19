{
  /*
Remove Node From End of Linked List
Solved 
Medium
You are given the beginning of a linked list head, and an integer n.

Remove the nth node from the end of the list and return the beginning of the list.

Example 1:

Input: head = [1,2,3,4], n = 2

Output: [1,2,4]
*/
}
class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Move `fast` pointer `n+1` steps ahead to maintain a gap of `n`
    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }

    // Move both pointers until `fast` reaches the end
    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
  }
}
{
  /*
  Appraoch 

  Maintain two pointers fast and slow 
  initialize fast to head and keep on traversing until index reaches the target index 
  
  */
}

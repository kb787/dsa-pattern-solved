{
  /*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted linked list and return the head of the new sorted linked list.
The new list should be made up of nodes from list1 and list2.
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,5]
Output: [1,1,2,3,4,5]
   */
}
class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let dummy = new ListNode(-1);
    let current = dummy;
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }

    if (list1) {
      current.next = list1;
    }
    if (list2) {
      current.next = list2;
    }

    return dummy.next;
  }
}
{
  /*
   Appraoch 
   Create a dummy list node for merging content 
   Iterate both the lists 
   For each value of header from comparison of both lists pop the node with smaller value
   Copy rest of elements for list 1
   Copy rest of elements for list 2
   */
}

{
  /*
    Linked List Cycle Detection
Solved 
Easy
Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

There is a cycle in a linked list if at least one node in the list that can be visited again by following the next pointer.

Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

Note: index is not given to you as a parameter.

Example 1:



Input: head = [1,2,3,4], index = 1

Output: true
*/
}

class Solution {
  hasCycle(head) {
    let setty = new Set();

    while (head !== null) {
      if (setty.has(head)) {
        return true;
      }
      setty.add(head);
      head = head.next;
    }

    return false;
  }
}

{
  /*
    Appraoch
    Traverse each node of list and pop in set
    If node already exists in list return true
    Else return false
    */
}

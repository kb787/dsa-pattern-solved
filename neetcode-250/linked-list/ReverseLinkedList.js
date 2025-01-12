{
  /*
   Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.
   Example 1:
   Input: head = [0,1,2,3]
   Output: [3,2,1,0]
    */
}

class Solution {
  reverseList(head) {
    let prev = null;
    let current = head;

    while (current != null) {
      let nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }
    return prev;
  }
}
{
  /*
   Approach 
   Maintain nodes :- current, prev and next 
   Initialize current as head , prev as null and nextTemp as current next
   Iterate through all elements , swap current.next by prev , prev by current and current by nextTemp
   */
}

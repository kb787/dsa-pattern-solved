{
  /*
   Given a binary tree, determine if it is height-balanced. A binary tree is considered height-balanced if the absolute difference in heights of the left and right subtrees is at most 1 for every node in the tree.

Examples:

Input: root[] = [1, 2, N, N, 3]
      1
    /
   2
    \
     3 
Output: false
Explanation: The height difference between the left and right subtrees at node 1 is 2, which exceeds 1. Hence, the tree is not balanced.
    */
}
class Solution {
  getHeight(node) {
    if (node === null) return 0;
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  isBalanced(root) {
    if (root === null) return true;

    let leftHeight = this.getHeight(root.left);
    let rightHeight = this.getHeight(root.right);

    return (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right)
    );
  }
}

/*
Recursive call in tree left part and right part for calculating height 
If abssolute difference for left part and right part <=1 then it is balanced
*/

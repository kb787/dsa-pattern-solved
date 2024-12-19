// Problem Statement
{
  /*
Given the root of a binary tree. Check whether it is a BST or not.
Note: We are considering that BSTs can not contain duplicate Nodes.
A BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Examples:

Input: root[] = [2, 1, 3, N, N, N, 5]
   2
 /    \
1      3
        \
         5
Output: true 
Explanation: 
The left subtree of every node contains smaller keys and right subtree of every node contains greater. Hence, the tree is a BST.

*/
}

// Iterative Approach (Inorder traversal of BST -> Array Conversion -> Validate for sorted array)
class Solution {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  inorderTraversalToArray(root, array = []) {
    if (root === null) {
      return array;
    }
    this.inorderTraversalToArray(root.left, array);
    array.push(root.key);
    this.inorderTraversalToArray(root.right, array);

    return array;
  }

  isSortedArray(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }

  isBST(root) {
    const transformedArray = this.inorderTraversalToArray(root, []);
    return this.isSortedArray(transformedArray);
  }
}

// Recursive Approach
class Solution {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  isBST(root) {
    return this.isBSTUtil(root, -Infinity, Infinity);
  }

  isBSTUtil(node, min, max) {
    // Base case: empty trees are BSTs
    if (node === null) return true;

    // Check if current node violates min/max constraints
    if (node.key <= min || node.key >= max) return false;

    // Recursively check left and right subtrees
    return (
      this.isBSTUtil(node.left, min, node.key) &&
      this.isBSTUtil(node.right, node.key, max)
    );
  }
}

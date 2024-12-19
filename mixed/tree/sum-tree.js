{
  /*
    Input:
    3
  /   \    
 1     2
Output: true
Explanation: The sum of left subtree and right subtree is 1 + 2 = 3, which is the value of the root node. Therefore,the given binary tree is a sum tree.
Input:
          10
        /    \
      20      30
    /   \ 
   10    10
Output: false
Explanation: The given tree is not a sum tree. For the root node, sum of elements in left subtree is 40 and sum of elements in right subtree is 30. Root element = 10 which is not equal to 30+40.
    */
}

class Solution {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].key;
    }
    return sum;
  }

  isSumTree(root) {
    if (root === null) {
      return true;
    }
    const calculateSum = (node) => {
      if (node === null) return 0;
      return node.key + calculateSum(node.left) + calculateSum(node.right);
    };

    if (root.left === null && root.right === null) {
      return true;
    }

    const leftSum = calculateSum(root.left);
    const rightSum = calculateSum(root.right);
    const isCurrentSumTree = root.key === leftSum + rightSum;

    return (
      isCurrentSumTree &&
      this.isSumTree(root.left) &&
      this.isSumTree(root.right)
    );
  }
}

// Approach
{
  /*
    If the tree has both ends left and right pick up a particular end 
    For left part recursively visit root,left and right 
    For right part repeat the same 
    Execute calculate sum for both ends left end and right end 
    If node = left end sum + right end sum it is a sum tree
    */
}

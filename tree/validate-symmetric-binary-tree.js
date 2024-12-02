class Solution {
  findHeight(root) {
    let leftHeight = 0,
      rightHeight = 0,
      maxHeight = 0;
    if (root === null) {
      return maxHeight;
    }
    if (root.left !== null) {
      let temp = root.left;
      while (temp !== null) {
        leftHeight++;
        temp = temp.left;
      }
    }
    if (root.right !== null) {
      let temp = root.right;
      while (temp !== null) {
        rightHeight++;
        temp = temp.right;
      }
    }
    maxHeight = Math.max(leftHeight, rightHeight);
    return maxHeight;
  }

  validateNodeAtLevel(root) {
    let maxHeight = this.findHeight(root);
    let isMirror = false;
    let leftVisitedLevel = 0,
      rightVisitedLevel = 0;
    let leftNodeAtLevel = null,
      rightNodeAtLevel = null;
    let tempNode = root;

    tempNode = tempNode.left;
    while (tempNode !== null && leftVisitedLevel < maxHeight - 1) {
      leftVisitedLevel++;
      tempNode = tempNode.left;
    }
    leftNodeAtLevel = tempNode;

    tempNode = root.right;
    while (tempNode !== null && rightVisitedLevel < maxHeight - 1) {
      rightVisitedLevel++;
      tempNode = tempNode.right;
    }
    rightNodeAtLevel = tempNode;

    if (
      leftNodeAtLevel !== null &&
      rightNodeAtLevel !== null &&
      rightNodeAtLevel.key === leftNodeAtLevel.key
    ) {
      if (
        (rightNodeAtLevel.right === null && leftNodeAtLevel.left === null) ||
        (rightNodeAtLevel.right !== null &&
          leftNodeAtLevel.left !== null &&
          rightNodeAtLevel.right.key === leftNodeAtLevel.left.key &&
          leftNodeAtLevel.right === null &&
          rightNodeAtLevel.left === null) ||
        (leftNodeAtLevel.right !== null &&
          rightNodeAtLevel.left !== null &&
          leftNodeAtLevel.right.key === rightNodeAtLevel.left.key)
      ) {
        isMirror = true;
      }
    }

    return isMirror;
  }

  isSymmetric(root) {
    if (root === null) {
      return true;
    }
    if (
      (root.left !== null && root.right === null) ||
      (root.right !== null && root.left === null)
    ) {
      return false;
    }
    return this.validateNodeAtLevel(root);
  }
}

class BinarySearchTree {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  inorderTraversal(root) {
    if (root === null) {
      return;
    }
    this.inorderTraversal(root.left);
    console.log(root.key);
    this.inorderTraversal(root.right);
  }

  insertElement(key, root) {
    if (root === null) {
      return new BinarySearchTree(key);
    } else if (key < root.key) {
      root.left = this.insertElement(key, root.left);
    } else if (key > root.key) {
      root.right = this.insertElement(key, root.right);
    }
    return root;
  }
  searchElement(key, root) {
    let isExist = false;
    if (root === null) {
      return false;
    } else if (root.key === key) {
      isExist = true;
    } else if (root.key > key) {
      return this.searchElement(key, root.left);
    } else if (root.key < key) {
      return this.searchElement(key, root.right);
    }
    return isExist;
  }
  deleteElement(key, root) {
    if (root === null) {
      return;
    }
  }
}
let treeObj = new BinarySearchTree(5);
treeObj = treeObj.insertElement(4, treeObj);
treeObj = treeObj.insertElement(6, treeObj);
treeObj.inorderTraversal(treeObj);
console.log(treeObj.searchElement(7, treeObj));
treeObj = treeObj.insertElement(7, treeObj);
treeObj.inorderTraversal(treeObj);

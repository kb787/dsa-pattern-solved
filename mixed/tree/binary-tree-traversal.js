class BinaryTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  inOrderTraversal(node) {
    if (node === null) {
      return;
    }
    this.inOrderTraversal(node.left);
    console.log(node.data);
    this.inOrderTraversal(node.right);
  }
  preOrderTraversal(node) {
    if (node === null) {
      return;
    }
    console.log(node.data);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }
  postOrderTraversal(node) {
    if (node === null) {
      return;
    }
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.data);
  }
  levelOrderTraversal(node) {
    if (node === null) {
      return;
    }
    let queue = [node];
    while (queue.length > 0) {
      node = queue.shift();
      console.log(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

let myNode = new BinaryTree(5);
let firstNode = new BinaryTree(8);
let secondNode = new BinaryTree(9);
myNode.left = firstNode;
myNode.right = secondNode;
myNode.inOrderTraversal(myNode);
myNode.preOrderTraversal(myNode);
myNode.levelOrderTraversal(myNode);

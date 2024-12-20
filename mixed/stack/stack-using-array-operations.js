// Basic Operations of Stack

class Stack {
  constructor() {
    this.arr = [];
    this.size = 0;
    this.top = -1; // Initialize top as -1 to indicate empty stack
  }

  pushElement(key) {
    this.top++;
    this.arr[this.top] = key;
    this.size++;
  }

  popElement() {
    if (this.top < 0) {
      return null; // Stack underflow
    }
    const poppedElement = this.arr[this.top];
    this.top--;
    this.size--;
    return poppedElement;
  }

  traverseStack() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.arr[i]);
    }
  }

  isExisting(key) {
    for (let i = 0; i <= this.top; i++) {
      if (this.arr[i] === key) {
        return true;
      }
    }
    return false;
  }
}

// Example usage:
const stacky = new Stack();
stacky.pushElement(2);
stacky.pushElement(3);
stacky.pushElement(6);
console.log("After pushing elements:");
stacky.traverseStack();

console.log("Popped element:", stacky.popElement());
console.log("After popping:");
stacky.traverseStack();

console.log("6 exists in stack:", stacky.isExisting(6));

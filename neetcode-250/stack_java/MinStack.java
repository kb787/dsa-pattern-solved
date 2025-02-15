/*
 Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in 
O
(
1
)
O(1) time.
 */

import java.util.*;

class MinStack {

    int minimumVal = Integer.MAX_VALUE;
    Stack<Integer> stacky = new Stack<Integer>();

    public void push(int val) {
        if (val <= minimumVal) {
            stacky.push(minimumVal); // Push the old minimum value
            minimumVal = val; // Update the minimum value
        }
        stacky.push(val); // Push the new value
    }

    public void pop() {
        int topValue = stacky.pop();
        if (topValue == minimumVal) {
            minimumVal = stacky.pop(); // Pop the old minimum value
        }
    }

    public int top() {
        return stacky.peek();
    }

    public int getMin() {
        return minimumVal;
    }
}

/*
   Approach:
   1. Take a variable minimumVal initialize it to Max Possible Value 
   2. Use Stack class for push if val is lesser than minimumVal then push minimumVal and update minimumVal to val
   3. For pop if top value is equal to minimumVal then pop the top value and update minimumVal to the next top value
    
 */
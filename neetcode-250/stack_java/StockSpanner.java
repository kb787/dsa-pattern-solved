/*

Implement the StockSpanner class:
StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.
Example 1:

Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]
 */

import java.util.*;

class StockSpanner {
    private Stack<int[]> stack;

    public StockSpanner() {
        stack = new Stack<>();
    }

    public int next(int price) {
        int span = 1;
        while (!stack.isEmpty() && stack.peek()[0] <= price) {
            span += stack.pop()[1];
        }

        // Push the current price and its span onto the stack
        stack.push(new int[] { price, span });

        // Return the span for the current price
        return span;
    }
}

/*
 * 1.Create an instance of stack class
 * 2.Conditional check if stack is not empty and price is less than equal to stack peek
 * 3.If yes then push the price inside stack
 */
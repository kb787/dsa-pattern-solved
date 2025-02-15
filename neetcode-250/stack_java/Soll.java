import java.util.*;

class Soll{
    public int calPoints(String[] operations) {
        ArrayList<Integer> counterArray = new ArrayList<>();
        int totalSum = 0;

        for (String op : operations) {
            if (op.equals("C")) {
                if (!counterArray.isEmpty()) {
                    counterArray.remove(counterArray.size() - 1);
                }
            } else if (op.equals("D")) {
                if (!counterArray.isEmpty()) {
                    counterArray.add(counterArray.get(counterArray.size() - 1) * 2);
                }
            } else if (op.equals("+")) {
                if (counterArray.size() >= 2) {
                    int sumLastTwo = counterArray.get(counterArray.size() - 1) + counterArray.get(counterArray.size() - 2);
                    counterArray.add(sumLastTwo);
                }
            } else {
                // Convert numeric string to integer and add to list
                counterArray.add(Integer.parseInt(op));
            }
        }

        // Calculate total sum
        for (int num : counterArray) {
            totalSum += num;
        }

        return totalSum;
    }
}


    /*
     Approach
     1. Create an ArrayList to store the points.
     2. Traverse through string array and perform the following operations:
        a. If the operation is "C", remove the last element from the list.
        b. If the operation is "D", double the last element and add to the list.
        c. If the operation is "+", add the sum of last two elements to the list.
        d. If the operation is a number, convert it to integer and add to the list.
     3. Calculate the total sum of the points in the list.   
     */

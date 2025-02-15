import java.util.* ;

class MyStack {
    ArrayList<Integer> queue = new ArrayList<Integer>() ;

    void push(int x){
         queue.add(x) ;
    }

    int top(){
        int topElement = queue.get(queue.size()-1) ;
        return topElement ;
    }
    int pop(){
        int removedElement = queue.remove(queue.size()-1) ;
        return removedElement ; 
    } 
    boolean empty(){
        boolean isEmpty = false ;
        int queueSize = queue.size() ;
        if(queueSize < 1){
            isEmpty = true ;
        }
        return isEmpty ;
    }
 }

/*
Create An arraylist
For Pop iterate the element of last index and remove it
For Peak just return the last element
*/ 
class BubbleSort {
    swapElements(arr,i,j){
        let tempVar  ;
        tempVar = arr[j] ;
        arr[j] = arr[i] ;
        arr[i] = tempVar ;
    }
    bubbleSort(arr){
        let i=0,j ;
        while(i<arr.length-1){
            for(j = i+1 ; j<arr.length ; j++){
                 if(arr[j]<arr[i]){
                    this.swapElements(arr,i,j) 
                 }
            }
            i++ ;
        }
        return arr ;
    }
}

let sollBubble = new BubbleSort() ;
let inputArray = [1,5,8,3] ;
let resultArray = sollBubble.bubbleSort(inputArray) ;
console.log(resultArray) ;
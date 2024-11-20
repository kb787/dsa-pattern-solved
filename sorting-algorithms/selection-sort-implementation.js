class SelectionSort {
    swappElements(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    selectionSort(arr) {
        let n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            this.swappElements(arr, i, minIndex);
        }

        return arr;
    }
}

let arrayInput = [1, 20, 19, 4, 3];
let sorting = new SelectionSort();
let transformedArray = sorting.selectionSort(arrayInput);
console.log(transformedArray); 
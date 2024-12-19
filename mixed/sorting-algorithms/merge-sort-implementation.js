class MergeSort {
    merge(arr, left, mid, right) {
        const n1 = mid - left + 1;
        const n2 = right - mid;
        const L = new Array(n1);
        const R = new Array(n2);
        for (let i = 0; i < n1; i++) L[i] = arr[left + i];
        for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
        let i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    mergeSort(arr, left, right) {
        if (left >= right) return;

        const mid = Math.floor(left + (right - left) / 2);
        this.mergeSort(arr, left, mid);
        this.mergeSort(arr, mid + 1, right);
        this.merge(arr, left, mid, right);
    }
}

let sollMerge = new MergeSort();
let inputArray = [1, 5, 8, 3];
sollMerge.mergeSort(inputArray, 0, inputArray.length - 1);
console.log(inputArray); 


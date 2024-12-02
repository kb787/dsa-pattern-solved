class Solution {
  equilibrium(arr) {
    let i = 0,
      leftPartSum = 0,
      rightPartSum = 0,
      keyElement,
      j,
      k,
      isExist = false;
    if (arr.length > 1) {
      while (i < arr.length) {
        keyElement = arr[i];
        leftPartSum = 0; // Reset leftPartSum
        rightPartSum = 0; // Reset rightPartSum

        j = i - 1;
        while (j >= 0) {
          // Include index 0 in left sum
          leftPartSum = leftPartSum + arr[j];
          j--;
        }

        k = i + 1;
        while (k < arr.length) {
          rightPartSum = rightPartSum + arr[k];
          k++;
        }

        if (leftPartSum === rightPartSum) {
          isExist = true;
          break; // Exit early when equilibrium point is found
        }
        i++;
      }
    } else {
      isExist = true; // Single element is always an equilibrium point
    }
    return isExist;
  }
}

// Optmized Approach
class Solution {
  equilibrium(arr) {
    if (arr.length === 1) return true; // Single element is always an equilibrium point

    let totalSum = arr.reduce((sum, num) => sum + num, 0); // Total sum of the array
    let leftSum = 0; // Initialize left sum as 0

    for (let i = 0; i < arr.length; i++) {
      // Right sum is total sum minus left sum minus current element
      let rightSum = totalSum - leftSum - arr[i];

      if (leftSum === rightSum) {
        return true; // Equilibrium point found
      }

      leftSum += arr[i]; // Update left sum for the next iteration
    }

    return false; // No equilibrium point found
  }
}

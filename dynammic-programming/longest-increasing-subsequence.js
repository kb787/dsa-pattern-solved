{
  /*
   class Solution {
    longestSubsequence(n, a) {
        if (n === 0) return 0;
        let tail = new Array(n);
        tail[0] = a[0];
        let len = 1;
        
        for(let i = 1; i < n; i++) {
            if(a[i] > tail[len-1]) {
                tail[len] = a[i];
                len++;
            }
            else {
                let pos = this.binarySearch(tail, 0, len-1, a[i]);
                tail[pos] = a[i];
            }
        }
        return len;
    }
    binarySearch(tail, left, right, x) {
        while(left < right) {
            let mid = Math.floor((left + right) / 2);
            if(tail[mid] >= x) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return right;
    }
}
    */
}

class Solution {
  longestSubsequence(n, a) {
    if (n === 0) return 0;
    let tail = new Array(n);
    tail[0] = a[0];
    let len = 1;

    for (let i = 1; i < n; i++) {
      if (a[i] > tail[len - 1]) {
        tail[len] = a[i];
        len++;
      } else {
        let pos = this.binarySearch(tail, 0, len - 1, a[i]);
        tail[pos] = a[i];
      }
    }
    return len;
  }
  binarySearch(tail, left, right, x) {
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (tail[mid] >= x) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }
}

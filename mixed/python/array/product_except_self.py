class Solution:
    def productExceptSelf(self, arr):
        n = len(arr)
        result = [1] * n  # Initialize the result array with 1
        
        # Calculate the prefix product
        prefix = 1
        for i in range(n):
            result[i] = prefix
            prefix *= arr[i]
        
        # Calculate the suffix product and multiply with prefix
        suffix = 1
        for i in range(n - 1, -1, -1):
            result[i] *= suffix
            suffix *= arr[i]
        
        return result
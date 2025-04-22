# 4. **Question:** Rotate an integer array to the right by *k* positions.
#     **Input:** Array: `[1, 2, 3, 4, 5]`, k: `2`
#     **Expected Output:** `[4, 5, 1, 2, 3]`

def fun(arr,k):
   n=len(arr)
   return arr[n-k:]+arr[:n-k]
print(fun([1, 2, 3, 4, 5],3))

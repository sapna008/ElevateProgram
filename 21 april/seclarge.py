# 6. **Question:** Find the second largest element in an integer array.   
#     **Input:** `[7, 2, 9, 4, 9, 5]`   
#     **Expected Output:** `7`
def large(arr):
  maxi=float("-inf")
  for i in arr:
    if i>maxi:
      maxi=i
  return maxi
def seclar(arr):
  seclar=float("-inf")
  for i in arr:
    if i>seclar and large(arr)!=i:
      seclar=i 
  return seclar

print(seclar([7, 2, 9, 4, 9, 5]))

# 5. **Question:** Merge two sorted integer arrays into one sorted array.
#     **Input:** `[1, 3, 5]` and `[2, 4, 6]`
#     **Expected Output:** `[1, 2, 3, 4, 5, 6]`
def merge(arr1,arr2):
  li=arr1+arr1
  li.sort()
  return li
print(merge([1, 3, 5],[2, 4, 6]))
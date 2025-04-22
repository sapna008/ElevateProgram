# 7. **Question:** Implement binary search on a sorted integer array; return the index of the target or -1 if not found.
    
#     **Input:** Array: `[1, 3, 5, 7, 9]`, Target: `7`
    
#     **Expected Output:** `3`

def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

array = [1, 3, 5, 7, 9]
target = 7
print(binary_search(array, target)) 

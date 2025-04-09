# Rotate an Array by d – Counterclockwise or Left

# Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d positions.

# Examples:

# Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
# Output: {3, 4, 5, 6, 1, 2}
# Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}


# Input: arr[] = {1, 2, 3}, d = 4
# Output: {2, 3, 1}
# Explanation: The array is rotated as follows:

def RotateArray(arr,d):
    return arr[d:]+arr[:d]

arr=[1,2,3]
d=8
if d>len(arr):
    d=d%len(arr)
print(RotateArray(arr,d))
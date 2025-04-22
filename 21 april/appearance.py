# 2. **Question:** Count how many times a given value appears in an array.
#     **Input:** Array: `[2, 3, 2, 4, 2]`, Value: `2` 
#     **Expected Output:** `3`
def fun(arr,val):
    count=0
    for i in arr:
        if i==val:
            count+=1    
    return count
print(fun([2, 3, 2, 4, 2],2))
# 3. **Question:** Remove all zeros from an integer array, preserving order.   
#     **Input:** `[0, 1, 0, 2, 3, 0, 4]`   
#     **Expected Output:** `[1, 2, 3, 4]`
def fun(ar):
  arr=[]
  for i in ar:
    if i!=0:
      arr.append(i)
  return arr
print(fun([0, 1, 0, 2, 3, 0, 4]))

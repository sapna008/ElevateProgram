# 1. **Question:** Compute the factorial of a non-negative integer.
    
#     **Input:** `5`
    
#     **Expected Output:** `120`
def fac(n):
  if n==0:
    return 1
  return n*fac(n-1)
print(fac(5))
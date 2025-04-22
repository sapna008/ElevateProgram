def fun(arr,x):
  n=len(arr)
  strt=0
  end=n-1
  
  while strt<=end:
    mid=(strt+end)//2
    if arr[mid]==x:
      return mid 
    elif arr[mid]>x:
      end=mid-1
    else:
      strt=strt+1
      


print(fun([1,2,3,4,5,6,7,8,9,10],6))
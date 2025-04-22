# 15. **Question:** Calculate the sum of digits of a non-negative integer.   
#     **Input:** `8472`  
#     **Expected Output:** `21`
def sum_of_digits(n):
    return sum(int(digit) for digit in str(n))

number = 8472
print(sum_of_digits(number))

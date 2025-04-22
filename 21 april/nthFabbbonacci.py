# 16. **Question:** Generate the *n*th Fibonacci number (with F₀ = 0, F₁ = 1).
#     **Input:** `7`  
#     **Expected Output:** `13`
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b

    return b

n = 7
print(fibonacci(n))  

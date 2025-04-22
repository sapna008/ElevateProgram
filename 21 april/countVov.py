# 14. **Question:** Count the number of vowels in a string.   
#     **Input:** `"implementation"`
#     **Expected Output:** `6`

def count_vowels(s):
    vowels = set("aeiouAEIOU")
    return sum(1 for char in s if char in vowels)

input_str = "implementation"
print(count_vowels(input_str))

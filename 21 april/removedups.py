# 10. **Question:** Remove all duplicate characters from a string, preserving first occurrences.
#     **Input:** `"programming"`
#     **Expected Output:** `"progamin"`


def remove_duplicates(s):
    seen = set()
    result = []

    for char in s:
        if char not in seen:
            seen.add(char)
            result.append(char)

    return ''.join(result)
input_str = "programming"
print(remove_duplicates(input_str)) 

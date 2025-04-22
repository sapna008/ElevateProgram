# 12. **Question:** Implement substring search: return the starting index of the first occurrence of a pattern in a text, or -1 if not found.
    
#     **Input:** Text: "hello world", Pattern: "world"
    
#     **Expected Output:** 6
def substring_search(text, pattern):
    n, m = len(text), len(pattern)

    for i in range(n - m + 1):
        if text[i:i + m] == pattern:
            return i
    return -1

text = "hello world"
pattern = "world"
print(substring_search(text, pattern)) 

# - **Question:** Given an elevation map, compute how much water it can trap after raining.
    
#     **Input:** `[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]`
    
#     **Expected Output:** `6`
def trap(height):
    if not height or len(height) < 3:
        return 0

    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]
    water = 0

    while left < right:
        if height[left] < height[right]:
            left += 1
            left_max = max(left_max, height[left])
            water += left_max - height[left]
        else:
            right -= 1
            right_max = max(right_max, height[right])
            water += right_max - height[right]

    return water

# Test
height_map = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap(height_map))  # Output: 6

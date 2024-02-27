function sortedSquares(nums: number[]): number[] {
    let n = nums.length
    let i = 0, j = n - 1, index = n - 1
    let nums2 = new Array(n).fill(0)
    while (i <= j) {
        if (nums[i] * nums[i] <= nums[j] * nums[j]) {
            nums2[index--] = nums[j] * nums[j]
            --j
        } else {
            nums2[index--] = nums[i] * nums[i]
            ++i
        }
    }

    return nums2
}

{
    let nums = [-4, -1, 0, 3, 10]
    let nums2 = sortedSquares(nums)
    console.log(nums2)
}

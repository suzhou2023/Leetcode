function maxSubArray(nums: number[]): number {
    let max = Number.MIN_SAFE_INTEGER
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(max, sum)
        if (sum < 0) sum = 0
    }

    return max
}

{
    let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    console.log(maxSubArray(nums))
}
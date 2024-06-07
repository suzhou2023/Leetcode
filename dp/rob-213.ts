function rob198(nums: number[]): number {
    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0]

    let dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }

    return dp[nums.length - 1]
}

function rob213(nums: number[]): number {
    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0]

    let res1 = rob198(nums.slice(0, nums.length - 1))
    let res2 = rob198(nums.slice(1))

    return Math.max(res1, res2)
}
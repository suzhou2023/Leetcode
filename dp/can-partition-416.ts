function canPartition(nums: number[]): boolean {
    let sum = nums.reduce((acc, cur) => acc + cur, 0)
    if (sum % 2 != 0) return false

    let totalCap = Math.floor(sum / 2)
    let len = nums.length

    let dp: number[] = new Array(totalCap + 1).fill(0)

    for (let i = 0; i < len; i++) {
        for (let cap = totalCap; cap >= nums[i]; cap--) {
            dp[cap] = Math.max(dp[cap], dp[cap - nums[i]] + nums[i])
        }
    }

    return dp[totalCap] == totalCap
}

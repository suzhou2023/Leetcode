/**
 * dp[i]定义为以nums[i]结尾的最长连续递增子序列长度
 */
function findLengthOfLCIS(nums: number[]): number {
    if (nums.length == 1) return 1

    let dp: number[] = new Array(nums.length).fill(1)
    let max = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1
        if (dp[i] > max) max = dp[i]
    }

    return max
}

/**
 * dp[i]定义为以nums[i]结尾的最长递增子序列长度
 */
function lengthOfLIS(nums: number[]): number {
    let dp: number[] = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) dp[i] = Math.max(dp[j] + 1, dp[i])
        }
    }

    return Math.max(...dp)
}
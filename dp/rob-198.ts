/**
 * 打家劫舍
 * dp[i] - 表示i以内（包括i）的合法元素之和最大值
 */
function rob(nums: number[]): number {
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
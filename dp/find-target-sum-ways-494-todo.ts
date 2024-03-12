/**
 * 01背包组合问题，见笔记
 * 
 * 填满cap这么大容积的包，有dp[cap]种方法
 * 
 * dp[cap] += dp[cap - nums[i]]
 */
function findTargetSumWays(nums: number[], target: number): number {
    let sum = nums.reduce((acc, cur) => acc + cur, 0)
    if (sum < target) return 0
    if ((sum - target) % 2 != 0) return 0

    let maxCap = Math.floor((sum - target) / 2)
    let dp: number[] = new Array(maxCap + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < nums.length; i++) {
        for (let cap = maxCap; cap >= nums[i]; cap--) {
            dp[cap] += dp[cap - nums[i]]
        }
    }

    return dp[maxCap]
}

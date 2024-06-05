/**
 * 01背包组合问题
 * 实际上是将nums分成两组，两组数的和相减等于target。
 * 这里可以转化为01背包组合问题：从nums选取一组数，填充容量为(sum - target)/2的背包，有多少种方式
 */
/**
 * 
 * 用来解决的一类问题：在一组数中选取若干个数（可以重复选取数字），保证它们的和为target，求选取的方式一共有多少种，
 * 注意不同的取数顺序为不同的方式。
 * 
 * dp[cap] - 表示将容量为cap的背包装满的方式数，可以重复使用物品，并且装入物品顺序不同，算不同的方式
 */
function findTargetSumWays(nums: number[], target: number): number {
    target = Math.abs(target) // target可能为负数
    let sum = nums.reduce((acc, cur) => acc + cur, 0)
    if (sum < target) return 0
    if ((sum - target) % 2 != 0) return 0

    let maxCap = Math.round((sum - target) / 2) // 或者是：Math.round((sum + target) / 2)
    let dp: number[] = new Array(maxCap + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < nums.length; i++) {
        for (let cap = maxCap; cap >= nums[i]; cap--) {
            dp[cap] += dp[cap - nums[i]]
        }
    }

    return dp[maxCap]
}
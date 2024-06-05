/**
 * 01背包组合问题
 * 用来解决的一类问题：在一组数（不包含重复数字）中选取若干个数（不能重复选取数字），保证它们的和为target，求选取的方式一共有多少种。
 * （注意：用背包解决组合问题，必须不能包含重复数字，因为背包问题会将重复数字当作不同的物品来处理，01背包和完全背包都是的）
 * 
 * 本题实际上是将nums分成两组，两组数的和相减等于target。
 * 
 * dp[cap] - 表示将容量为cap的背包装满的方式数，不能重复选取物品
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
/**
 * 外层循环遍历物品（纵向），内层循环正序遍历背包大小（横向）
 * 
 *    1      2        3        4         5          -- 背包大小
 *   (0)    (0)      (0)      (0)       (1)         -- 物品0（重量5）
 *   (0)    (1)      (0)      (0)       (1)         -- 物品1（重量2）
 *   (0)    (1+1)    (0)      (1)       (1)         -- 物品2（重量2）
 *   (0)    (2)      (0)      (1+1)     (1)         -- 物品3（重量4）
 */

{
    let coins = [4, 2, 8, 3, 6]
    let res = findTargetSumWays(coins, -17)
    console.log(res)
}
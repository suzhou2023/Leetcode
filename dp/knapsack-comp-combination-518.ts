/**
 * 完全背包组合问题
 * 用来解决的一类问题：在一组不重复的数中选取若干个数（可以重复选取数字），保证它们的和为target，求选取的方式一共有多少种。
 * 
 * coins：硬币面值的数组
 * amount：表示要凑成的总金额
 * 
 * dp[cap] - 表示凑成金额cap的组合方式数
 */
function change(amount: number, coins: number[]): number {
    let dp: number[] = new Array(amount + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < coins.length; i++) {
        for (let cap = coins[i]; cap <= amount; cap++) {
            dp[cap] += dp[cap - coins[i]]
        }
    }

    return dp[amount]
}
/**
 * 外层循环遍历物品（纵向），内层循环正序遍历背包大小（横向）
 * 
 *    1      2        3        4         5          -- 背包大小
 *   (1)    (1)      (1)      (1)       (1)         -- 硬币0（面值1）
 *   (1)    (1+1)    (1+1)    (1+2)     (1+2)       -- 硬币1（面值2）
 *   (1)    (2)      (2)      (3)       (3+1)       -- 硬币2（面值5）
 */

{
    let coins = [4, 2, 8, 3, 6]
    let res = change(200, coins)
    console.log(res)
}
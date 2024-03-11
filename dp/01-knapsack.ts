/**
 * 有n件物品和一个最多能背重量为w的背包。第i件物品的重量是weight[i]，得到的价值是value[i]。
 * 每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大？
 * weight[] = [1, 3, 4]
 * value[] = [15, 20, 30]
 * 
 * dp[i][j] - 表示物品0到i任取，放入容量为j的背包，最大价值量为dp[i][j]
 * 
 * 递推公式：
 * dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
 * 
 * 如果物品i的重量大于j，无法放入背包，则：
 * dp[i][j] = dp[i-1][j]
 * 反之，则：
 * dp[i][j] = dp[i-1][j-weight[i]] + value[i]
 * 
 * 
 * 初始化：dp[i][j]
 *                 knapsack capacity
 *            0     1      2      3      4
 *         ___________________________________
 * item 0: |  0  |  15  |  15  |  15  |  15  |
 * item 1: |  0  |  0   |  0   |  0   |  0   |
 * item 2: |  0  |  0   |  0   |  0   |  0   |
 */

function maxValue(weight: number[], value: number[], w: number): number {
    let num = weight.length

    let dp: number[][] = new Array(num).fill(null).map(() => new Array(w + 1).fill(0))
    for (let cap = 1; cap <= w; cap++) {
        dp[0][cap] = weight[0] <= cap ? value[0] : 0
    }

    for (let cap = 1; cap <= w; cap++) {
        for (let i = 1; i < num; i++) {
            if (weight[i] > cap) {
                dp[i][cap] = dp[i - 1][cap]
            } else {
                dp[i][cap] = Math.max(dp[i - 1][cap], dp[i - 1][cap - weight[i]] + value[i])
            }
        }
    }

    return dp[num - 1][w]
}

{
    let weight = [1, 3, 4]
    let value = [15, 20, 30]
    let res = maxValue(weight, value, 4)
    console.log(res)
}
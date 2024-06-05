/**
 * 完全背包
 * dp[cap] - 表示凑成总金额cap所需的最小硬币数量
 */
function coinChange(coins: number[], amount: number): number {
    let dp: number[] = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0

    for (let i = 0; i < coins.length; i++) {
        for (let cap = coins[i]; cap <= amount; cap++) {
            dp[cap] = Math.min(dp[cap - coins[i]] + 1, dp[cap])
        }
    }

    return dp[amount] == Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
}
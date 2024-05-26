function minCostClimbingStairs(cost: number[]): number {
    let n = cost.length
    // dp[i]表示爬到第i级台阶的最小费用
    let dp: number[] = new Array(n + 1)
    dp[0] = 0
    dp[1] = 0
    if (n == 2) return Math.min(cost[0], cost[1])

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }

    return dp[n]
}
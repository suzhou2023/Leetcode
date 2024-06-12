/**
 * dp[i][j] - 定义为第i天在j状态下的利润最大值
 * j有5个状态，分别是：
 * 0：未操作
 * 1：第一次买入
 * 2：第一次卖出
 * 3：第二次买入
 * 4：第二次卖出
 */
function maxProfit123(prices: number[]): number {
    if (prices.length == 0) return 0

    let dp = new Array(prices.length).fill(null).map(() => new Array(5).fill(0))
    dp[0][1] = -prices[0]
    dp[0][3] = -prices[0]

    for (let i = 1; i < prices.length; i++) {
        dp[i][1] = Math.max(-prices[i], dp[i - 1][1])
        dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2])
        dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3])
        dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4])
    }

    return dp[prices.length - 1][4]
}

{
    let prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]
    maxProfit123(prices)
}

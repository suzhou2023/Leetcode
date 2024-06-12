/**
 * dp[i][j] - 定义为第i天在j状态下的利润最大值
 * j有(2k + 1)个状态，分别是：
 * 0：未操作
 * 1：第一次买入
 * 2：第一次卖出
 * 3：第二次买入
 * 4：第二次卖出
 * ...
 * 2k-1：第k次买入
 * 2k：第k次卖出
 */
function maxProfit188(k: number, prices: number[]): number {
    if (prices.length == 0) return 0

    let dp = new Array(prices.length).fill(null).map(() => new Array(2 * k + 1).fill(0))
    for (let i = 1; i <= 2 * k; i += 2) {
        dp[0][i] = -prices[0]
    }

    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j <= 2 * k; j++) {
            if (j % 2 == 1) {
                dp[i][j] = Math.max(dp[i - 1][j - 1] - prices[i], dp[i - 1][j])
            } else {
                dp[i][j] = Math.max(dp[i - 1][j - 1] + prices[i], dp[i - 1][j])
            }
        }
    }

    return dp[prices.length - 1][2 * k]
}


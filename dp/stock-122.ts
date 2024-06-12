/**
 * 非dp算法
 */
function maxProfit122(prices: number[]): number {
    let buyPrice = -1, profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (buyPrice >= 0 && prices[i + 1] < prices[i]) { // 是否卖出
            profit += prices[i] - buyPrice
            buyPrice = -1
        } else if (buyPrice < 0 && prices[i + 1] > prices[i]) { // 是否买入
            buyPrice = prices[i]
        }
    }

    if (buyPrice >= 0) { // 最后如果还未卖出
        profit += prices[prices.length - 1] - buyPrice
    }

    return profit
}

/**
 * 非dp算法
 */
function maxProfit(prices: number[]): number {
    let low = Number.MAX_SAFE_INTEGER
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        low = Math.min(low, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - low)
    }

    return maxProfit
}
function maxProfit122(prices: number[]): number {
    let lowest = prices[0], maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i]
        } else {
            if (prices[i] - lowest > maxProfit) {
                maxProfit = prices[i] - lowest
            }
        }
    }

    return maxProfit
}
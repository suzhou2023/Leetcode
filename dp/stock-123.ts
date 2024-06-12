/**
 * 非dp算法
 */
function maxProfit123(prices: number[]): number {
    let buyPrice = -1, profits: number[] = []

    for (let i = 0; i < prices.length - 1; i++) {
        if (buyPrice >= 0 && prices[i + 1] < prices[i]) { // 是否卖出
            profits.push(prices[i] - buyPrice)
            buyPrice = -1
        } else if (buyPrice < 0 && prices[i + 1] > prices[i]) { // 是否买入
            buyPrice = prices[i]
        }
    }

    if (buyPrice >= 0) { // 最后如果还未卖出
        profits.push(prices[prices.length - 1] - buyPrice)
    }

    profits.push(0)
    profits.push(0)
    profits.sort((a, b) => b - a)
    console.log(profits)

    return profits[0] + profits[1]
}

{
    let prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]
    maxProfit123(prices)
}

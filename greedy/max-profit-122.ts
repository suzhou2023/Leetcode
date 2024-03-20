function maxProfit122(prices: number[]): number {

    let i = 0, profit = 0, buy = Number.MIN_SAFE_INTEGER
    while (i < prices.length) {
        if (i == prices.length - 1 && buy > Number.MIN_SAFE_INTEGER) profit += prices[i] - buy

        if (prices[i + 1] > prices[i] && buy == Number.MIN_SAFE_INTEGER) {
            buy = prices[i]
        } else if (prices[i + 1] < prices[i] && buy > Number.MIN_SAFE_INTEGER) {
            profit += prices[i] - buy
            buy = Number.MIN_SAFE_INTEGER
        }

        i++
    }

    return profit
}

{
    // let prices = [2, 1, 2, 0, 1]
    // let res = maxProfit(prices)
    // console.log(res)
}
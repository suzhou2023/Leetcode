/**
 * 有n件物品和一个最多能背重量为w的背包。第i件物品的重量是weight[i]，得到的价值是value[i]。
 * 每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大？
 * weight[] = [1, 3, 4]
 * value[] = [15, 20, 30]
 * 
 * dp[cap] - 容量为cap的背包所背的最大价值
 * 
 * 递推公式：
 * dp[cap] = max(dp[cap-1], dp[cap-weight[i]] + value[i])
 * 
 * 如果物品i的重量大于cap，无法放入背包，则：
 * dp[cap] = dp[cap-1]
 * 反之，则：
 * dp[cap] = dp[cap-weight[i]] + value[i]
 */
function maxValue1d(weight: number[], value: number[], w: number): number {
    let num = weight.length

    let dp: number[] = new Array(w + 1).fill(0)
    for (let itemIndex = 0; itemIndex < num; itemIndex++) {
        if (weight[itemIndex] <= 1) dp[1] = Math.max(value[itemIndex], dp[1])
    }

    for (let cap = 1; cap <= w; cap++) {
        for (let i = 0; i < num; i++) {
            if (weight[i] > cap) {
                dp[cap] = dp[cap - 1]
            } else {
                dp[cap] = Math.max(dp[cap - 1], dp[cap - weight[i]] + value[i])
            }
        }
    }

    return dp[w]
}

{
    let weight = [1, 3, 4]
    let value = [15, 20, 30]
    let res = maxValue(weight, value, 4)
    console.log(res)
}
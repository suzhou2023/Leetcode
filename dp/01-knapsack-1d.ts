/**
 * 有n件物品和一个最多能背重量为w的背包。第i件物品的重量是weight[i]，得到的价值是value[i]。
 * 每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大？
 * weight[] = [1, 3, 4]
 * value[] = [15, 20, 30]
 * 
 * dp[cap] - 容量为cap的背包所背的最大价值
 * 
 * 递推公式：
 * dp[cap] = max(dp[cap], dp[cap-weight[i]] + value[i])
 */
function maxValue1d(weight: number[], value: number[], w: number): number {
    let num = weight.length
    let dp: number[] = new Array(w + 1).fill(0)

    for (let i = 0; i < num; i++) {
        for (let cap = w; cap >= weight[i]; cap--) {
            dp[cap] = Math.max(dp[cap], dp[cap - weight[i]] + value[i])
        }
    }

    return dp[w]
}

{
    let weight = [1, 2, 3, 4]
    let value = [15, 20, 25, 30]
    let res = maxValue1d(weight, value, 7)
    console.log(res)
}

/**
 * (0)5      (0)4      (0)3      (0)2   (0)1
 * (15)5     (15)4     (15)3     (15)2  (15)1
 * (15+20)5  (15+20)4  (15+20)3  (20)2  (15)1
 * (25+20)5  (25+15)4  (15+20)3  (20)2  (15)1
 * (25+20)5  (25+15)4  (15+20)3  (20)2  (15)1
 */


/**
 * 有n件物品和一个最多能背重量为w的背包。第i件物品的重量是weight[i]，得到的价值是value[i]。
 * 每件物品可以用任意次，求解背包可以装入物品的最大价值。
 * weight[] = [1, 3, 4]
 * value[] = [15, 20, 30]
 * 
 * dp[cap] - 容量为cap的背包所背的最大价值
 * 
 * 递推公式：
 * dp[cap] = max(dp[cap], dp[cap-weight[i]] + value[i])
 */
function maxValue2(weight: number[], value: number[], w: number): number {
    let num = weight.length
    let dp: number[] = new Array(w + 1).fill(0)

    for (let i = 0; i < num; i++) {
        for (let cap = weight[i]; cap <= w; cap++) {
            dp[cap] = Math.max(dp[cap], dp[cap - weight[i]] + value[i])
        }
    }

    return dp[w]
}

{
    let weight = [1, 3, 4]
    let value = [15, 20, 30]
    let res = maxValue2(weight, value, 7)
    console.log(res)
}

/**
 *          (0)1    (0)2       (0)3          (0)4
 * i = 0    (15)    (15+15)    (15+15+15)    (15+15+15+15)
 * i = 1    (15)    (15+15)    (15+15+15)    (15+15+15+15)
 * i = 2    (15)    (15+15)    (15+15+15)    (15+15+15+15)
 * 
 * 遍历过程的理解：
 * 外层遍历表示挨个遍历不同种类的物品，内层遍历表示遍历背包大小，并且是正序的；
 * 每一个外层遍历结束，都表示对于已经遍历过的物品，各个大小的背包能装入的最大价值；
 * 完全背包的外层遍历和内层遍历是可以交换的；
 * 完全背包的背包大小的遍历方向是正向的；
 */

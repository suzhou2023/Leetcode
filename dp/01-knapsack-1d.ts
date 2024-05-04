/**
 * 有n件物品和一个最多能背重量为w的背包。第i件物品的重量是weight[i]，得到的价值是value[i]。
 * 每件物品只能用一次，求解背包可以装入物品的最大价值。
 * weight[] = [1, 3, 4]
 * value[] = [15, 20, 30]
 * 
 * dp[cap] - 容量为cap的背包所背的最大价值
 * 
 * 递推公式：
 * dp[cap] = max(dp[cap], dp[cap-weight[i]] + value[i])
 * 公式需要结合代码来理解，右边的dp[cap]表示还未遍历到物品i时，cap容量的背包所能装入的最大价值
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
    let weight = [1, 3, 4]
    let value = [15, 20, 30]
    let res = maxValue1d(weight, value, 7)
    console.log(res)
}

/**
 * 双重循环遍历过程的理解：
 * 
 *   7          6          5          4         3       2       1     --  背包大小
 *  (15)       (15)       (15)       (15)      (15)    (15)    (15)   --  物品0
 *  (15+20)    (15+20)    (15+20)    (15+20)   (20)    (15)    (15)   --  物品1
 *  (20+30)    (15+30)    (15+30)    (15+20)   (20)    (15)    (15)   --  物品2
 * 
 * 外层遍历表示挨个遍历不同种类的物品，内层遍历表示逆序遍历背包大小；
 * 每一个外层遍历结束，都表示对于已经遍历过的物品，各个大小的背包能装入的最大价值；
 */


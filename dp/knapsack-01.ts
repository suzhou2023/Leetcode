/**
 * 有n件物品和一个最多能背重量为w的背包。第i件物品的重量是weight[i]，得到的价值是value[i]。
 * 每件物品只能用一次，求解背包可以装入物品的最大价值。
 * weight[] = [1, 3, 4]
 * value[] = [5, 20, 30]
 * 
 * dp[cap] - 容量为cap的背包所背的最大价值量的数组
 * 
 * 递推公式：
 * dp[cap] = max(dp[cap], dp[cap-weight[i]] + value[i])
 * 公式需要结合代码来理解，右边的dp[cap]表示还未遍历到物品i时，cap容量的背包所能装入的最大价值
 */
function maxValue01(weight: number[], value: number[], w: number): number {
    let num = weight.length
    let dp: number[] = new Array(w + 1).fill(0)

    for (let i = 0; i < num; i++) { // 遍历物品
        for (let cap = w; cap >= weight[i]; cap--) { // 从大到小遍历背包
            dp[cap] = Math.max(dp[cap], dp[cap - weight[i]] + value[i])
        }
    }

    return dp[w]
}
/**
 * 双重循环遍历，外层遍历物品（纵向），内层从大到小遍历背包（横向）
 * 
 *   7          6         5         4         3       2      1     --  背包大小
 *  (5)        (5)       (5)       (5)       (5)     (5)    (5)    --  物品0
 *  (5+20)     (5+20)    (5+20)    (5+20)    (20)    (5)    (5)    --  物品1
 *  (20+30)    (5+30)    (5+30)    (5+20)    (20)    (5)    (5)    --  物品2
 * 
 * 外层遍历表示挨个遍历不同种类的物品，内层遍历表示逆序遍历背包大小；
 * 每一个外层遍历结束，都表示对于已经遍历过的物品，各个大小的背包能装入的最大价值量；
 */

{
    let weight = [1, 3, 4]
    let value = [5, 20, 30]
    let res = maxValue01(weight, value, 6)
    console.log('maxValue01, res', res)
}

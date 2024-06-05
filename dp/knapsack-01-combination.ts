/**
 * 01背包组合问题：
 * 有一个不同种类物品的列表，使用这些物品将一个容量为w的背包装满，每种物品只使用一次，有多少种方式？
 * 物品重量数组：nums = [1, 2, 1, 3, 1]（注意这里是5个不同的物品，虽然有物品重量一样）
 * 
 * 递推公式：dp[cap] += dp[cap - nums[i]]，dp[cap]表示填满cap这么大容量的背包，有dp[cap]种方式
 * 怎么理解递推公式：每增加一种物品i，对于cap容量的背包，增加的填充方式数为dp[cap - nums[i]]
 */
function sumWays(nums: number[], w: number): number {
    let dp: number[] = new Array(w + 1).fill(0)
    dp[0] = 1 // 这里表示nums[i]等于cap时，有一种新方式填充背包

    for (let i = 0; i < nums.length; i++) {
        for (let cap = w; cap >= nums[i]; cap--) {
            dp[cap] += dp[cap - nums[i]]
        }
    }

    return dp[w]
}

{
    let nums = [4, 2, 8, 3, 6]
    console.log(sumWays(nums, 20))
}

/**
 *  外层循环遍历物品种类（纵向），内层循环逆序遍历背包大小（横向）
 * 
 *   5      4      3      2      1      --  背包大小
 *   0      0      0      0      1      --  物品0（重量1）
 *   0      0      1      1      1      --  物品1（重量2）
 *   0      1      1+1    1+1    1+1    --  物品2（重量1）
 *   2      1+2    2+1    2      2      --  物品3（重量3）
 *   2+3    3+3    3+2    2+2    2+1    --  物品4（重量1）
 */

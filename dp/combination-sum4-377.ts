/**
 * dp[cap] - 容量为cap的背包装满物品的方法数的最大值，装入物品顺序不同为不同的方法（排列数）
 */
function combinationSum4(nums: number[], target: number): number {
    let dp: number[] = new Array(target + 1).fill(0)
    dp[0] = 1

    for (let cap = 1; cap <= target; cap++) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > cap) continue
            dp[cap] += dp[cap - nums[i]]
        }
    }

    return dp[target]
}


/**
 * nums = [1,2,3], target = 4
 * 
 *            (1)item0    (2)item1    (3)item2
 * cap = 1    1
 * cap = 2    1           1+1
 * cap = 3    2           2+1         3+1       
 * cap = 4    4           4+2         6+1
 * 
 * 遍历过程理解：
 * 外层循环正序遍历背包大小，内层循环遍历物品；
 * 每一个外层循环遍历结束，都表示我用cap容量的背包，先装入的物品依次变化时，得到的装入方法数的总和；
 */
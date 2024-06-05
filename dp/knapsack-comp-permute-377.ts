/**
 * 完全背包排列问题
 * 用来解决的一类问题：在一组不重复的数中选取若干个数（可以重复选取数字），保证它们的和为target，求选取的方式一共有多少种，
 * 注意不同的取数顺序为不同的方式。
 * 
 * dp[cap] - 表示将容量为cap的背包装满的方式数，可以重复使用物品，并且装入物品顺序不同，算不同的方式
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
 * 外层循环正序遍历背包大小（纵向），内层循环遍历物品（横向）
 * 
 *  item0(1)    item1(2)     item2(3)         -- 物品种类
 *   1           1            1               -- cap = 1 
 *   1           1+1          2               -- cap = 2
 *   2           2+1          3+1             -- cap = 3 
 *   4           4+2          6+1             -- cap = 4
 * 
 * 遍历过程理解：
 * dp[cap]的最终值在每一轮外层循环结束后得到，本例即item2处的值；
 * 每一轮外层循环遍历结束，都表示我用cap容量的背包，先装入的物品依次变化时，得到的装入方法数的总和，举个例子：
 * 当cap=4时，先装入item0，则有dp[3]=4种方式；先装入item1，则有dp[2]=2种方式；先装入item2，则有dp[1]=1种方式。
 * 最后得到dp[4]=4+2+1，即7种方式。
 */

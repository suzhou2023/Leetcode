/**
 * 利用二叉搜索树特性
 * dp[n] += dp[i-1] * dp[n-i]
 * @param n 
 * @returns 
 */
function numTrees(n: number): number {
    let dp = new Array(n + 1).fill(0)
    dp[0] = 1

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }

    return dp[n]
}


{
    console.log(numTrees(4))
}
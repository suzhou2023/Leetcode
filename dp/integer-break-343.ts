/**
 * dp[i] - 拆分整数i得到的最大乘积
 * 2 -> 1 * 1
 * 3 -> 1 * 2
 * 4 -> 2 * 2
 * 5 -> 2 * 3
 * 6 -> 3 * 3
 * 7 -> 2 * 2 * 3
 */
function integerBreak(n: number): number {
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1

    for (let i = 2; i <= n; i++) {
        let max = 0
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            let val = Math.max(j * dp[i - j], j * (i - j))
            max = Math.max(val, max)
        }
        dp[i] = max
    }

    return dp[n]
}


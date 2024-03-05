function uniquePaths(m: number, n: number): number {
    // 二维数组，表示到达位置(i,j)的路径条数
    let dp: number[][] = new Array(m).fill(null).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
}

{
    let res = uniquePaths(3, 7)
    console.log(res)
}

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let dp: number[][] = new Array(m).fill(null).map(() => new Array(n).fill(0))

    for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) dp[i][0] = 1
    for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) dp[0][j] = 1

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) continue
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
}
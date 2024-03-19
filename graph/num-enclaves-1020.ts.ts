
function dfs1020(grid: number[][], x: number, y: number) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return

    if (grid[x][y] == 0) return
    grid[x][y] = 0

    dfs1020(grid, x, y - 1)
    dfs1020(grid, x, y + 1)
    dfs1020(grid, x - 1, y)
    dfs1020(grid, x + 1, y)
}

function numEnclaves(grid: number[][]): number {
    let m = grid.length
    let n = grid[0].length

    for (let i = 0; i < m; i++) {
        if (grid[i][0] == 1) dfs1020(grid, i, 0)
        if (grid[i][n - 1] == 1) dfs1020(grid, i, n - 1)
    }
    for (let j = 0; j < n; j++) {
        if (grid[0][j] == 1) dfs1020(grid, 0, j)
        if (grid[m - 1][j] == 1) dfs1020(grid, m - 1, j)
    }

    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            count += grid[i][j] == 1 ? 1 : 0
        }
    }

    return count
}

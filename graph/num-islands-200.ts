
function dfs(grid: string[][], visited: boolean[][], x: number, y: number) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return

    if (visited[x][y] || grid[x][y] == '0') return
    visited[x][y] = true

    dfs(grid, visited, x, y - 1)
    dfs(grid, visited, x, y + 1)
    dfs(grid, visited, x - 1, y)
    dfs(grid, visited, x + 1, y)
}

function numIslands(grid: string[][]): number {
    let m = grid.length
    let n = grid[0].length

    let visited: boolean[][] = new Array(m).fill(null).map(() => new Array(n).fill(false))

    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] == '1') {
                count += 1
                dfs(grid, visited, i, j)
            }
        }
    }

    return count
}

{
    let grid = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ]

    console.log(numIslands(grid))
}
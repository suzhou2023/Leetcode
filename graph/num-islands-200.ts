
function dfs(grid: string[][], visited: boolean[][], r: number, c: number) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return

    if (visited[r][c] || grid[r][c] == '0') return
    visited[r][c] = true

    dfs(grid, visited, r, c - 1)
    dfs(grid, visited, r, c + 1)
    dfs(grid, visited, r - 1, c)
    dfs(grid, visited, r + 1, c)
}

function numIslands(grid: string[][]): number {
    let r = grid.length
    let c = grid[0].length

    let visited: boolean[][] = new Array(r).fill(null).map(() => new Array(c).fill(false))

    let count = 0
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
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
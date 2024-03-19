
function dfs1020(grid: string[][], visited: boolean[][], x: number, y: number, count: number[], mark: boolean[]) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return

    if (visited[x][y] || grid[x][y] == '0') return
    visited[x][y] = true
    count[0] += 1
    // border 
    if (x == 0 || x == grid.length - 1 || y == 0 || y == grid[0].length - 1) mark[0] = true

    dfs1020(grid, visited, x, y - 1, count, mark)
    dfs1020(grid, visited, x, y + 1, count, mark)
    dfs1020(grid, visited, x - 1, y, count, mark)
    dfs1020(grid, visited, x + 1, y, count, mark)
}

function numEnclaves(grid: string[][]): number {
    let m = grid.length
    let n = grid[0].length

    let visited: boolean[][] = new Array(m).fill(null).map(() => new Array(n).fill(false))

    let total = 0, total2 = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] == '1') {
                let count: number[] = [0]
                let mark: boolean[] = [false]
                dfs1020(grid, visited, i, j, count, mark)
                total += count[0]
                if (mark[0]) total2 += count[0]
            }
        }
    }

    return total - total2
}

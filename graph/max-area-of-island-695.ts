
function dfs695(grid: string[][], visited: boolean[][], x: number, y: number, area: number[]) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return

    if (visited[x][y] || grid[x][y] == '0') return
    visited[x][y] = true
    area[0] += 1

    dfs695(grid, visited, x, y - 1, area)
    dfs695(grid, visited, x, y + 1, area)
    dfs695(grid, visited, x - 1, y, area)
    dfs695(grid, visited, x + 1, y, area)
}

function maxAreaOfIsland(grid: string[][]): number {
    let m = grid.length
    let n = grid[0].length

    let visited: boolean[][] = new Array(m).fill(null).map(() => new Array(n).fill(false))

    let maxArea = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] == '1') {
                let area: number[] = [0]
                dfs695(grid, visited, i, j, area)
                maxArea = Math.max(area[0], maxArea)
            }
        }
    }

    return maxArea
}

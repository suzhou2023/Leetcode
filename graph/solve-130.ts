
function dfs130(grid: string[][], x: number, y: number) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return

    if (grid[x][y] == 'X' || grid[x][y] == 'P') return
    grid[x][y] = 'P'

    dfs130(grid, x, y - 1)
    dfs130(grid, x, y + 1)
    dfs130(grid, x - 1, y)
    dfs130(grid, x + 1, y)
}

function solve(board: string[][]): void {
    let m = board.length
    let n = board[0].length

    for (let i = 0; i < m; i++) {
        if (board[i][0] == 'O') dfs130(board, i, 0)
        if (board[i][n - 1] == 'O') dfs130(board, i, n - 1)
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] == 'O') dfs130(board, 0, j)
        if (board[m - 1][j] == 'O') dfs130(board, m - 1, j)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 'P') {
                board[i][j] = 'O'
            } else if (board[i][j] == 'O') {
                board[i][j] = 'X'
            }
        }
    }
}

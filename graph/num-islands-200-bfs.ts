
function bfs(grid: string[][], visited: boolean[][], x: number, y: number) {
    let q: number[][] = []
    q.push([x, y])

    while (q.length > 0) {
        let cur = q.shift()
        if (!cur) continue

        let i = cur[0], j = cur[1]
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) continue
        if (visited[i][j] || grid[i][j] == '0') continue
        visited[i][j] = true

        q.push([i, j - 1])
        q.push([i, j + 1])
        q.push([i - 1, j])
        q.push([i + 1, j])
    }
}

function numIslands2(grid: string[][]): number {
    let m = grid.length
    let n = grid[0].length

    let visited: boolean[][] = new Array(m).fill(null).map(() => new Array(n).fill(false))

    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] == '1') count += 1
            bfs(grid, visited, i, j)
        }
    }

    return count
}

{
    // let grid = [
    //     ["1", "1", "1", "1", "0"],
    //     ["1", "1", "0", "1", "0"],
    //     ["1", "1", "0", "0", "0"],
    //     ["0", "0", "0", "0", "0"],
    // ]

    // console.log(numIslands2(grid))
}
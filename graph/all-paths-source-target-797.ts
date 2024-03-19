
function dfs(graph: number[][], index: number, path: number[], res: number[][]) {
    if (path[path.length - 1] == graph.length - 1) {
        res.push([...path])
        return
    }

    let list: number[] = graph[index]
    for (let i = 0; i < list.length; i++) {
        path.push(list[i])
        dfs(graph, list[i], path, res)
        path.pop()
    }
}

function allPathsSourceTarget(graph: number[][]): number[][] {
    let path: number[] = []
    let res: number[][] = []
    path.push(0)
    dfs(graph, 0, path, res)

    return res
}
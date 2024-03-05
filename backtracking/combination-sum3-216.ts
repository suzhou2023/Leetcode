function backtracking(max: number, k: number, target: number, start: number, group: number[], res: number[][]) {
    if (group.length == k) {
        let sum = group.reduce((acc, cur) => acc + cur, 0)
        if (sum == target) res.push([...group])
        return
    }

    // 注意剪枝操作
    for (let i = start; i <= max - (k - group.length) + 1; i++) {
        group.push(i)
        backtracking(max, k, target, i + 1, group, res)
        group.pop()
    }
}

function combinationSum3(k: number, sum: number): number[][] {
    let res: number[][] = []
    let group: number[] = []
    backtracking(9, k, sum, 1, group, res)
    return res
}

{
    let res = combinationSum3(4, 30)
    console.log(res)
}
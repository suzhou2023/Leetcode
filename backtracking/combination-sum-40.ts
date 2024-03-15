
function backtracking40(candidates: number[], target: number, startIndex: number, group: number[], res: number[][]) {
    let sum = group.reduce((acc, cur) => acc + cur, 0)
    if (sum == target) {
        res.push([...group])
        return
    } else if (sum > target) {
        return
    }

    // 注意剪枝操作
    let len = candidates.length
    for (let i = startIndex; i < len; i++) {
        // 去掉重复组合
        if (i > startIndex && candidates[i] == candidates[i - 1]) continue
        group.push(candidates[i])
        backtracking40(candidates, target, i + 1, group, res)
        group.pop()
    }
}

function combinationSum2(candidates: number[], target: number): number[][] {
    let group: number[] = []
    let res: number[][] = []
    candidates = candidates.sort()
    backtracking40(candidates, target, 0, group, res)

    return res
}

{
    let candidates = [10, 1, 2, 7, 6, 1, 5]
    let res = combinationSum2(candidates, 8)
    console.log(res)
}
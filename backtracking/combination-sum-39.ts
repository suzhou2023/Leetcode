
function backtracking39(candidates: number[], target: number, startIndex: number, group: number[], res: number[][]) {
    let sum = group.reduce((acc, cur) => acc + cur, 0)
    if (sum == target) {
        res.push([...group])
        return
    } else if (sum > target) {
        return
    }

    // 注意剪枝操作
    for (let i = startIndex; i < candidates.length; i++) {
        group.push(candidates[i])
        backtracking39(candidates, target, i, group, res)
        group.pop()
    }
}

function combinationSum(candidates: number[], target: number): number[][] {
    let group: number[] = []
    let res: number[][] = []
    backtracking39(candidates, target, 0, group, res)

    return res
}

{
    let candidates = [4, 2, 8]
    let res = combinationSum(candidates, 8)
    console.log(res)
}
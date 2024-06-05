/**
 * 组合问题：从无重复元素数组中选一组数，满足和为target，可以重复选取数字
 */
function backtracking39(candidates: number[], target: number, startIndex: number, group: number[], res: number[][]) {
    let sum = group.reduce((acc, cur) => acc + cur, 0)
    if (sum > target) return
    if (sum == target) {
        res.push([...group])
        return
    }

    for (let i = startIndex; i < candidates.length; i++) {
        group.push(candidates[i])
        // 这里的startIndex传递i还是i+1就是能否重复选取数字的关键
        backtracking39(candidates, target, i, group, res)
        group.pop()
    }
}

function combinationSum39(candidates: number[], target: number): number[][] {
    let group: number[] = []
    let res: number[][] = []
    backtracking39(candidates, target, 0, group, res)

    return res
}

{
    let candidates = [4, 2, 8, 3, 6]
    let res = combinationSum39(candidates, 100)
    console.log(res, res.length)
}
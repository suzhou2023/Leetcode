/**
 * 组合问题：从有重复元素数组中选一组数，满足和为target，每个数字只使用一次
 */
function backtracking40(candidates: number[], target: number, startIndex: number, group: number[], res: number[][]) {
    let sum = group.reduce((acc, cur) => acc + cur, 0)
    if (sum > target) return
    if (sum == target) {
        res.push([...group])
        return
    }

    for (let i = startIndex; i < candidates.length; i++) {
        if (i > startIndex && candidates[i] == candidates[i - 1]) continue // 树层去重
        group.push(candidates[i])
        backtracking40(candidates, target, i + 1, group, res)
        group.pop()
    }
}

function combinationSum40(candidates: number[], target: number): number[][] {
    let group: number[] = []
    let res: number[][] = []
    candidates.sort() // 排序
    backtracking40(candidates, target, 0, group, res)

    return res
}

{
    let candidates = [10, 1, 2, 7, 6, 1, 5]
    let res = combinationSum40(candidates, 8)
    console.log(res)
}
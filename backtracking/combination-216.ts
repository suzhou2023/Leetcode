/**
 * 组合问题：从1到n选k个不重复的数，满足和为target
 */
let count216 = 0
function backtracking216(n: number, k: number, target: number, start: number, group: number[], res: number[][]) {
    count216 += 1 // test
    let sum = group.reduce((acc, cur) => acc + cur, 0)
    if (group.length == k) {
        if (sum == target) res.push([...group])
        return
    }

    for (let i = start; i <= n; i++) {
        if (i > target - sum) return // 剪枝
        group.push(i)
        backtracking216(n, k, target, i + 1, group, res)
        group.pop()
    }
}

function combinationSum216(k: number, sum: number): number[][] {
    let res: number[][] = []
    let group: number[] = []
    backtracking216(100, k, sum, 1, group, res)
    return res
}

{
    let res = combinationSum216(4, 20)
    console.log(res)
    console.log('len', res.length)
    console.log('count', count216)
}
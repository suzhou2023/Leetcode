/**
 * 排列问题：有重复元素数组，其元素的全排列
 * 与无重复元素数组的区别，就是加上一个树层去重
 */
function backtracking47(nums: number[], usedIndices: number[], group: number[], res: number[][]) {
    if (group.length == nums.length) {
        res.push([...group])
        return
    }

    let used: number = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        if (usedIndices.includes(i)) continue // 不能重复选取元素
        if (nums[i] == used) continue // 树层去重
        usedIndices.push(i)
        used = nums[i]
        group.push(nums[i])
        backtracking47(nums, usedIndices, group, res)
        group.pop()
        usedIndices.pop()
    }
}

function permute47(nums: number[]): number[][] {
    let usedIndices: number[] = []
    let group: number[] = []
    let res: number[][] = []
    nums.sort() // 排序
    backtracking47(nums, usedIndices, group, res)

    return res
}

{
    let nums = [1, 2, 2, 3]
    let res = permute47(nums)
    console.log(res)
}
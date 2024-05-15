/**
 * 排列问题：无重复元素数组，其元素的全排列
 */
let count46 = 0
function backtracking46(nums: number[], usedIndices: number[], group: number[], res: number[][]) {
    count46 += 1 // test
    if (group.length == nums.length) {
        res.push([...group])
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (usedIndices.includes(i)) continue // 不能重复选取元素
        group.push(nums[i])
        usedIndices.push(i)
        backtracking46(nums, usedIndices, group, res)
        group.pop()
        usedIndices.pop()
    }
}

function permute46(nums: number[]): number[][] {
    let usedIndices: number[] = []
    let group: number[] = []
    let res: number[][] = []
    backtracking46(nums, usedIndices, group, res)

    return res
}

{
    let nums = [1, 2, 3]
    let res = permute46(nums)
    console.log(res)
    console.log('count', count46)
}
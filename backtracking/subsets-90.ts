/**
 * 子集问题：有重复元素数组的子集
 */
function backtracking90(nums: number[], startIndex: number, group: number[], res: number[][]) {
    res.push([...group])

    for (let i = startIndex; i < nums.length; i++) {
        if (i > startIndex && nums[i] == nums[i - 1]) continue  // 树层去重
        group.push(nums[i])
        backtracking90(nums, i + 1, group, res)
        group.pop()
    }
}

function subsetsWithDup(nums: number[]): number[][] {
    let group: number[] = []
    let res: number[][] = []
    nums.sort() // 排序
    backtracking90(nums, 0, group, res)

    return res
}

{
    let nums = [1, 2, 2, 3, 3, 4, 4, 4, 9]
    let res = subsetsWithDup(nums)
    console.log(res)
    console.log('len', res.length)
}

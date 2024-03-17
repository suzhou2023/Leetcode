/**
 * 有重复元素的子集问题，先要对集合进行排序（？）
 */

function backtracking90(nums: number[], startIndex: number, group: number[], res: number[][]) {
    res.push([...group])

    let used: number = Number.MIN_SAFE_INTEGER
    for (let i = startIndex; i < nums.length; i++) {
        // 树层去重
        // if (i > startIndex && nums[i] == nums[i - 1]) continue
        if (nums[i] == used) continue
        group.push(nums[i])
        used = nums[i]
        backtracking90(nums, i + 1, group, res)
        group.pop()
    }
}

function subsetsWithDup(nums: number[]): number[][] {
    let group: number[] = []
    let res: number[][] = []
    nums = nums.sort()
    backtracking90(nums, 0, group, res)

    return res
}

{
    let nums = [1, 2, 2]
    let res = subsetsWithDup(nums)
    console.log(res)
}

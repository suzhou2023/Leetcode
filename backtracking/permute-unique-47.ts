function backtracking47(nums: number[], usedIndices: number[], group: number[], res: number[][]) {
    if (group.length == nums.length) {
        res.push([...group])
        return
    }

    let used: number = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        if (usedIndices.includes(i)) continue
        // 树层去重
        if (nums[i] == used) continue
        group.push(nums[i])
        usedIndices.push(i)
        used = nums[i]
        backtracking47(nums, usedIndices, group, res)
        group.pop()
        usedIndices.pop()
    }
}

function permuteUnique(nums: number[]): number[][] {
    let usedIndices: number[] = []
    let group: number[] = []
    let res: number[][] = []
    nums = nums.sort()
    backtracking47(nums, usedIndices, group, res)

    return res
}

{
    let nums = [1, 2, 2, 3]
    let res = permuteUnique(nums)
    console.log(res)
}
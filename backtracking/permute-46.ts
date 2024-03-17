function backtracking46(nums: number[], usedIndices: number[], group: number[], res: number[][]) {
    if (group.length == nums.length) {
        res.push([...group])
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (usedIndices.includes(i)) continue
        group.push(nums[i])
        usedIndices.push(i)
        backtracking46(nums, usedIndices, group, res)
        group.pop()
        usedIndices.pop()
    }
}

function permute(nums: number[]): number[][] {
    let usedIndices: number[] = []
    let group: number[] = []
    let res: number[][] = []
    backtracking46(nums, usedIndices, group, res)

    return res
}

{
    let nums = [1, 2, 3]
    let res = permute(nums)
    console.log(res)
}
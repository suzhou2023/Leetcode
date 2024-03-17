function backtracking90(nums: number[], startIndex: number, group: number[], res: number[][]) {

    for (let i = startIndex; i < nums.length; i++) {
        if (i > startIndex && nums[i] == nums[i - 1]) continue
        group.push(nums[i])
        res.push([...group])
        backtracking90(nums, i + 1, group, res)
        group.pop()
    }
}

function subsetsWithDup(nums: number[]): number[][] {
    let group: number[] = []
    let res: number[][] = [[]]
    nums = nums.sort()
    backtracking90(nums, 0, group, res)

    return res
}

{
    let nums = [1, 2, 2]
    let res = subsetsWithDup(nums)
    console.log(res)
}


function backtracking78(nums: number[], startIndex: number, group: number[], res: number[][]) {
    res.push([...group])

    for (let i = startIndex; i < nums.length; i++) {
        group.push(nums[i])
        backtracking78(nums, i + 1, group, res)
        group.pop()
    }
}

function subsets(nums: number[]): number[][] {
    let group: number[] = []
    let res: number[][] = []
    backtracking78(nums, 0, group, res)

    return res
}

{
    let nums = [1, 2, 3, 4]
    let res = subsets(nums)
    console.log(res)
}
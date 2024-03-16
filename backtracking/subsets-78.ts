function backtracking78(nums, startIndex: number, group: number[], res: number[][]) {

    for (let i = startIndex; i < nums.length; i++) {
        group.push(nums[i])
        res.push([...group])
        backtracking78(nums, i + 1, group, res)
        group.pop()
    }
}

function subsets(nums: number[]): number[][] {
    let group: number[] = []
    let res: number[][] = [[]]
    backtracking78(nums, 0, group, res)

    return res
}
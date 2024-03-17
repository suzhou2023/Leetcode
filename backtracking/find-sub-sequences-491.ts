
function backtracking491(nums: number[], startIndex: number, group: number[], res: number[][]) {
    if (group.length > 1) res.push([...group])

    let used: number[] = []
    for (let i = startIndex; i < nums.length; i++) {
        if (used.includes(nums[i])) continue
        used.push(nums[i])
        if (group.length > 0 && nums[i] < group.slice(-1)[0]) continue
        group.push(nums[i])
        backtracking491(nums, i + 1, group, res)
        group.pop()
    }
}

function findSubsequences(nums: number[]): number[][] {
    let group: number[] = []
    let res: number[][] = []
    backtracking491(nums, 0, group, res)

    return res
}

{
    let nums = [1, 2, 3, 1, 2, 3]
    let res = findSubsequences(nums)
    console.log(res)
}


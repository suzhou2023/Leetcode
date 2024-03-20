function wiggleMaxLength(nums: number[]): number {
    if (nums.length == 1) return 1
    if (nums.length == 2 && nums[0] == nums[1]) return 1

    let i = 1
    while (nums.length > 2 && i < nums.length - 1) {
        let prevDiff = nums[i] - nums[i - 1]
        let nextDiff = nums[i + 1] - nums[i]
        if (prevDiff * nextDiff >= 0) {
            nums.splice(i, 1)
            continue
        }
        i++
    }

    if (nums.length == 2 && nums[0] == nums[1]) return 1
    return nums.length
}

{
    // let nums = [0, 0]
    // console.log(wiggleMaxLength(nums))
}
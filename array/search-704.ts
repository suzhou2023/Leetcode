function search(nums: number[], target: number): number {
    let start = 0, end = nums.length - 1

    let index = 0
    while (end >= start) {
        index = Math.floor((end + start) / 2)
        // console.log(index)
        if (end == start) return target == nums[index] ? index : -1

        if (index >= 0) {
            if (target == nums[index]) {
                return index
            } else if (target > nums[index]) {
                start = index + 1
            } else {
                end = index - 1
            }
        }
    }

    return -1
}

{
    let nums = [-1, 0, 3, 5, 9, 12]
    let index = search(nums, 2)
    console.log(index)
}
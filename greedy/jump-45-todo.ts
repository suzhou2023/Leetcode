

function jump(nums: number[]): number {
    if (nums.length == 1) return 0

    let cover = 0, count = 0
    for (let i = 0; i <= cover; i++) {
        // cover = Math.max(i + nums[i], cover)
        if (i + nums[i] > cover) {
            cover = i + nums[i]
            count += 1
        }
        if (cover >= nums.length - 1) break
    }

    return count
}


{
    let nums = [2, 3, 0, 1, 4]
    console.log(jump(nums))
}
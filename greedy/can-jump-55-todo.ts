function canJump(nums: number[]): boolean {
    let next = 0, cover = 0
    while (next <= cover) {
        if (next + nums[next] > cover) {
            cover = next + nums[next]
        }

        next++
    }

    return false
}


{
    let nums = [2, 3, 1, 1, 4]
    console.log(canJump(nums))
}
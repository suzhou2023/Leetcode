/**
 * 在当前位置的覆盖范围，找下一步的最大覆盖范围
 * 简单两行代码，还真不好想通
 * 
 */

function canJump(nums: number[]): boolean {
    if (nums.length == 1) return true

    let cover = 0
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(i + nums[i], cover)
        if (cover >= nums.length - 1) return true
    }

    return false
}


{
    let nums = [2, 3, 1, 1, 4]
    console.log(canJump(nums))
}
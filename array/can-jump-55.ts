function canJump(nums: number[]): boolean {
    let n = nums.length
    if (n <= 1) return true

    for (let i = 0; i < n - 1; i++) {
        let maxSteps = nums[i]
        let actualSteps = n - i - 1
        if (maxSteps >= actualSteps) return true
    }

    return false
}

function canJumpToIndex(nums: number[], index: number): number {
    if (index <= 0) return 0

    for (let i = 0; i < index; i++) {
        let maxSteps = nums[i]
        let actualSteps = index - i
        if (maxSteps >= actualSteps) return actualSteps
    }

    return -1
}

{
    let nums = [0, 2, 3]
}
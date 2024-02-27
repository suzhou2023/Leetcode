function minSubArrayLen(nums: number[], target: number): number {
    let sum = 0, l = 0, minLen = Number.MAX_SAFE_INTEGER

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r]
        while (sum >= target) {
            let len = r - l + 1
            minLen = len < minLen ? len : minLen
            sum -= nums[l++]
        }
    }

    return minLen
}


{
    let nums = [2, 3, 1, 2, 4, 3]
    let minLen = minSubArrayLen(nums, 7)
    console.log(minLen)
}
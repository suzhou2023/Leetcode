/**
 * todo 本地通过，leetcode不通过
 * @param nums 
 * @param target 
 * @returns 
 */
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

    return minLen == Number.MAX_SAFE_INTEGER ? 0 : minLen
}


{
    let nums = [1, 1, 1, 1, 1, 1, 1, 1]
    let minLen = minSubArrayLen(nums, 6)
    console.log(minLen)
}
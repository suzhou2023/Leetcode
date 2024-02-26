function majorityElement(nums: number[]): number {
    let candidate = 0, count = 0

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        if (count == 0) candidate = val
        count += (val == candidate) ? 1 : -1
    }

    return candidate
}


{
    // let nums = [1, 2, 2, 3, 5, 2, 2]
    let nums = [1, 6, 6, 3, 5, 6, 6]
    let c = majorityElement(nums)
    console.log(c)
}
function rotate(nums: number[], k: number): void {
    let n = nums.length

    for (let i = 0; i < k; i++) {
        let index = i, val = nums[i], tmp = 0
        do {
            let dstIndex = (index + k) % n
            tmp = nums[dstIndex]
            nums[dstIndex] = val
            val = tmp
            index = dstIndex
        } while (index != i)
    }
}


{
    let nums = [1, 2, 3, 4, 5, 6, 7, 8]
    rotate(nums, 3)
    console.log(nums)
}
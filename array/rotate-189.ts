function rotate(nums: number[], k: number): void {

    let n = nums.length

    for (let i = 0; i < n; i++) {
        let index = i, val = nums[i], tmp = nums[i]
        do {
            let dstIndex =
                tmp = nums[(index + k) % n]
            nums[(index + k) % n] = val
            val = tmp
            index = (index + k) % n
        } while (index != i)
    }
}


{
    let nums = [1, 2, 3, 4, 5, 6]
    rotate(nums, 3)
    console.log(nums)
}
function removeDuplicates2(nums: number[]): number {
    let i = 0, j = 0

    while (nums[i] != undefined) {
        let j = i + 1
        while (nums[j] <= nums[i]) j++
        if (nums[j] == undefined) break

        if (nums[i + 1] != undefined) {
            nums[i + 1] = nums[j]
            i++
        }
        if (nums[i] < nums[i + 1]) i++
    }


    return i + 1
}
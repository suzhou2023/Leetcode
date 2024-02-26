/**
 * 26.删除有序数组中的重复项
 * @param nums
 * @returns 移除后数组长度
 */
function removeDuplicates(nums: number[]): number {
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


{
    let nums = [4, 4, 5, 6]

    let len = removeDuplicates(nums)
    console.log(len)
    console.log(nums)
}








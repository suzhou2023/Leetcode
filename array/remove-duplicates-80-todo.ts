/**
 * 80.删除有序数组中的重复项II - todo
 * @param nums 
 * @returns 移除后数组长度
 */
function removeDuplicates80(nums: number[]): number {
    let n = nums.length
    if (n <= 2) return n

    let slow = 2, fast = 2
    while (fast < n) {
        if (nums[fast] != nums[slow - 2]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }

    return slow
}


{
    let nums = [4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 9]
    // let nums = [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 9]
    // let nums = [4, 4, 5, 5, 6, 6, 7, 7, 7, 8, 9]
    // let nums = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9]
    // let nums = [4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 9]

    let len = removeDuplicates80(nums)
    console.log(len)
    console.log(nums)
}








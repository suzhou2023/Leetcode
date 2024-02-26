/**
 * 27.移除元素
 * @param nums 
 * @param val 
 * @returns 移除后数组长度
 */
function removeElement(nums: number[], val: number): number {
    let i = 0, j = 0

    while (nums[j + 1] != undefined) j++

    while (i < j) {
        while (nums[i] != val && nums[i] != undefined) i++
        while (nums[j] == val) j--
        if (i < j) {
            nums[i++] = nums[j--]
        }
    }

    if (nums[j] == val) j--

    return j + 1
}

let nums = [4, 5]
let val = 4

let len = removeElement(nums, val)
console.log(len)
console.log(nums)








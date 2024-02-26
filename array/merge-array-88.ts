/**
 * 88.合并两个有序数组
 * 逆序合并思路todo
 * @param nums1 = [1, 2, 3, 0, 0, 0]
 * @param m = 3
 * @param nums2 = [2, 5, 6]
 * @param n = 3
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0, j = 0
    let nums = Array<number>(m + n)

    let index = 0
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            nums[index++] = nums1[i++]
        } else {
            nums[index++] = nums2[j++]
        }
    }

    while (i < m) {
        nums[index++] = nums1[i++]
    }

    while (j < n) {
        nums[index++] = nums2[j++]
    }

    index = 0
    while (index < m + n) {
        nums1[index] = nums[index++]
    }
}

let nums1 = [1, 2, 3, 0, 0, 0]
let nums2 = [2, 5, 6]

merge(nums1, 3, nums2, 3)
console.log(nums1)
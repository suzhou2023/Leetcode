
// nums是升序
function insert(nums: number[], val: number) {
    let index = 0
    while (index < nums.length && val > nums[index]) index++
    nums.splice(index, 0, val)
}

function largestSumAfterKNegations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)

    while (k > 0) {
        let min = nums.shift()
        if (min != undefined) {
            insert(nums, 0 - min)
        }
        k -= 1
    }

    return nums.reduce((acc, cur) => acc + cur, 0)
}

{
    let nums = [1, 2, 3]
    insert(nums, -1)
    console.log(nums)
}
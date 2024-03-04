function intersection(nums1: number[], nums2: number[]): number[] {
    let nums = nums1.filter(e1 => {
        let index = nums2.findIndex(e2 => e2 == e1)
        return index >= 0
    })

    return [...new Set(nums)]
}
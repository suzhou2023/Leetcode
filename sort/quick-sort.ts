function quickSort(arr: number[], left: number, right: number) {
    if (left >= right) return

    let i = left, j = right, pivot = arr[left]

    while (i < j) {
        while (i < j && arr[j] >= pivot) j--
        while (i < j && arr[i] <= pivot) i++
        if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    [arr[left], arr[i]] = [arr[i], arr[left]]
    quickSort(arr, left, i - 1)
    quickSort(arr, i + 1, right)
}

{
    let arr = [29, 10, 14, 37, 13]
    quickSort(arr, 0, arr.length - 1)
    console.log(arr)
}

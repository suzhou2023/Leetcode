function isHappy(n: number): boolean {
    let set = new Set<number>()

    let val = n
    while (val > 0) {
        let sum = 0
        while (val > 0) {
            sum += Math.pow(val % 10, 2)
            val = Math.floor(val / 10)
        }
        if (sum == 1) return true
        if (set.has(sum)) return false
        set.add(sum)
        val = sum
    }

    return false
}
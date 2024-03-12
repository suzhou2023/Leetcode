function lastStoneWeightII(stones: number[]): number {
    let totalWeight = stones.reduce((acc, cur) => acc + cur, 0)

    let maxCap = Math.floor(totalWeight / 2)
    let len = stones.length

    let dp: number[] = new Array(maxCap + 1).fill(0)

    for (let i = 0; i < len; i++) {
        for (let cap = maxCap; cap >= stones[i]; cap--) {
            dp[cap] = Math.max(dp[cap], dp[cap - stones[i]] + stones[i])
        }
    }

    return totalWeight - dp[maxCap] * 2
}
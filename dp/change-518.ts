/**
 * dp[cap]表示面值cap的最大组合方式数
 */

function change(amount: number, coins: number[]): number {
    let dp: number[] = new Array(amount + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < coins.length; i++) {
        for (let cap = coins[i]; cap <= amount; cap++) {
            dp[cap] += dp[cap - coins[i]]
        }
    }

    return dp[amount]
}


/**
 * amount = 5, coins = [1, 2, 5]
 * 
 *          (1)0  (0)1  (0)2    (0)3    (0)4      (0)5
 * i = 0    (1)   (1)   (1)     (1)     (1)       (1)
 * i = 1    (1)   (1)   (1+1)   (1+1)   (1+1+1)   (1+1+1)
 * i = 2    (1)   (1)   (1+1)   (1+1)   (1+1+1)   (1+1+1+1)
 */
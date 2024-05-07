
/**
 * 大数加法（牛客网）
 * @param s 第一个整数
 * @param t 第二个整数
 */
export function solve(s: string, t: string): string {
    if (!s || s.length == 0) return t
    if (!t || t.length == 0) return s

    let maxLen = Math.max(s.length, t.length)
    s = s.padStart(maxLen + 1, '0')
    t = t.padStart(maxLen + 1, '0')
    let res = '', carry = 0 // 进位

    let i = maxLen
    while (i >= 0) {
        let n1 = Number(s[i]), n2 = Number(t[i])
        let r = n1 + n2 + carry
        res = `${r % 10}${res}`
        carry = Math.floor(r / 10)
        i--
    }

    res = res.replace(/^0+/, '')
    if (res.length == 0) res = '0'
    return res
}

{
    let s = '733064366', t = '459309139'
    console.log(solve(s, t))
}
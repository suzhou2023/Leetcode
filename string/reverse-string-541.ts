function reverseString541(s: string, k: number): string {
    let ret = ''
    let n = Math.floor(s.length / k)
    for (let i = 0; i < n; i++) {
        let start = k * i
        let end = k * (i + 1)
        if (i % 2 == 0) {
            ret += s.substring(start, end).split('').reverse().join('')
        } else {
            ret += s.substring(start, end)
        }
    }

    let start = k * n
    let end = s.length
    if (n % 2 == 0) {
        ret += s.substring(start, end).split('').reverse().join('')
    } else {
        ret += s.substring(start, end)
    }

    return ret
}


{
    let s = "abcd"
    let res = reverseString541(s, 2)
    console.log(res)
}
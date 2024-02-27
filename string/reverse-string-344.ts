function reverseString(s: string[]): void {
    let tmp = ''
    for (let i = 0; i <= (s.length >> 1) - 1; i++) {
        tmp = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = tmp
    }
}

{
    let s = ["H", "a", "n", "n", "a", "h"]
    reverseString(s)
    console.log(s)
}
function reverseWords(s: string): string {
    return s.trim().split(' ').filter((s) => /^[a-zA-Z0-9]+$/.test(s)).reverse().join(' ')
}


{
    let s = "the sky is blue"
    let res = reverseWords(s)
    console.log(res)
}
function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false

    let map: Map<string, number> = new Map()
    for (let i = 0; i < s.length; i++) {
        let val = map.get(s[i])
        let newVal = val == undefined ? 1 : val + 1
        map.set(s[i], newVal)
    }

    for (let i = 0; i < t.length; i++) {
        let val = map.get(t[i])
        if (val == undefined) return false
        map.set(t[i], val - 1)
    }

    for (const val of map.values()) {
        if (val != 0) return false
    }

    return true
}

function commonChars(words: string[]): string[] {
    let maps = words.map(word => {
        let map: Map<string, number> = new Map()
        for (let i = 0; i < word.length; i++) {
            let val = map.get(word[i])
            let newVal = val == undefined ? 1 : val + 1
            map.set(word[i], newVal)
        }
        return map
    })

    let res: string[] = []
    for (const key of maps[1].keys()) {
        let repeatTimes: number[] = []
        for (let i = 0; i < maps.length; i++) {
            let repeatTime = maps[i].get(key)
            if (repeatTime == undefined) break

            repeatTimes.push(repeatTime)
        }
        if (repeatTimes.length == maps.length) {
            let minTimes = Math.min(...repeatTimes)
            for (let i = 0; i < minTimes; i++) {
                res.push(key)
            }
        }
    }

    return res
}
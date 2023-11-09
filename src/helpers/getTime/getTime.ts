export function getTime(seconds: number) {
    const minutes = seconds / 60
    const minutesRound = Math.round(minutes * 100) / 100;
    const minutesArray = String(minutesRound).split('.')

    if (seconds < 10) {
        return `00:0${seconds}`
    } else if (seconds < 60) {
        return `00:${seconds}`
    } else if (minutesRound < 10) {
        return `0${minutesArray[0]}:${minutesArray[1]}`
    } else if (minutesRound >= 10 && minutesRound < 60) {
        return `${minutesArray[0]}:${minutesArray[1]}`
    } else if (minutesRound >= 60) {
        return '00:00:00'
    }
}
export function getCurrentTime(sec: number) {
    const minutes = Math.floor(sec / 60);
    const s = sec % 60;
    const seconds = Math.floor(sec);

    if (seconds < 10) {
        return `00:0${seconds}`;
    } else if (seconds < 60) {
        return `00:${seconds}`;
    } else if (seconds === 60) {
        return `0${minutes}:00`;
    } else if (minutes > 0 && s < 10) {
        return `0${minutes}:0${seconds % 60}`;
    } else if (minutes > 0 && s >= 10) {
        return `0${minutes}:${seconds % 60}`;
    } else if (minutes >= 60) {
        return '00:00:00';
    }
}
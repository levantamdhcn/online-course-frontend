function convertSecondsToHMS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let formattedTime = '';

    if (hours > 0) {
        formattedTime += `${hours}:`;
    }

    if (minutes > 0 || hours > 0) {
        formattedTime += `${String(minutes).padStart(2, '0')}:`;
    }

    formattedTime += String(remainingSeconds).padStart(2, '0');

    return formattedTime;
}

export default convertSecondsToHMS;
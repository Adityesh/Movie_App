export function getDate() {
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const dateString = `${date} / ${month} / ${year}`;

    return dateString;
}

export function getTime() {
    const d = new Date();
    
    let hours = d.getHours();
    let minutes = d.getMinutes().toString().length < 2 ? `0${d.getMinutes()}` : d.getMinutes();
    let seconds = d.getSeconds().toString();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    return {
        hours,
        minutes,
        seconds : seconds.length === 1 ? '0' + seconds : seconds,
        ampm
    }
    
}
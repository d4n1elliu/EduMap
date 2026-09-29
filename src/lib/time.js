// minutes -> "HH:mm:ss" (the format of a C# TimeSpan)
export function minutesToTimeSpan(minutes) {
    const m = Number(minutes) || 0;
    const hh = String(Math.floor(m / 60)).padStart(2, '0');
    const mm = String(m % 60).padStart(2, '0');
    return `${hh}:${mm}:00`;
}

// Apply a "1:30 PM" style label to a date, returning a new Date
export function combineDateAndTime(date, timeLabel) {
    const [timePart, ampm = 'AM'] = timeLabel.split(' ');
    const [hours, minutes] = timePart.split(':');
    let hour24 = parseInt(hours, 10);
    if (ampm === 'PM' && hour24 !== 12) hour24 += 12;
    if (ampm === 'AM' && hour24 === 12) hour24 = 0;

    const result = new Date(date);
    result.setHours(hour24, parseInt(minutes, 10), 0, 0);
    return result;
}

// 90 -> "1 hr 30 mins", 120 -> "2 hrs"
export function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const parts = [];
    if (hours) parts.push(`${hours} ${hours === 1 ? 'hr' : 'hrs'}`);
    if (mins) parts.push(`${mins} mins`);
    return parts.join(' ');
}

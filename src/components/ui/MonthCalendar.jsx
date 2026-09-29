const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function isSameDay(a, b) {
    return a && b && a.toDateString() === b.toDateString();
}

// Single-month date picker (month is 0-based, like Date)
export default function MonthCalendar({ year, month, selectedDate, onSelect }) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const leadingBlanks = new Date(year, month, 1).getDay();
    const title = new Date(year, month, 1).toLocaleString('en-AU', { month: 'long', year: 'numeric' });

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="text-center text-xl font-semibold text-gray-800 mb-4">{title}</div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {WEEKDAYS.map((day, i) => (
                    <div key={`hdr-${i}`} className="py-3 text-gray-500 font-medium">{day}</div>
                ))}
                {Array.from({ length: leadingBlanks }, (_, i) => <div key={`blank-${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => {
                    const date = new Date(year, month, i + 1);
                    const isSelected = isSameDay(date, selectedDate);
                    return (
                        <button
                            key={i}
                            onClick={() => onSelect(date)}
                            className={`py-3 cursor-pointer hover:bg-blue-50 rounded-lg transition-colors ${isSelected ? 'bg-blue-600 text-white' : ''}`}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

import { useState } from 'react';
import { ChevronLeftIcon } from './Icons';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

function isSameDay(a, b) {
    return a && b && a.toDateString() === b.toDateString();
}

// Month date picker with prev/next navigation. Days before minDate are disabled.
export default function MonthCalendar({ selectedDate, onSelect, minDate }) {
    const [view, setView] = useState(() => {
        const d = selectedDate ?? minDate ?? new Date();
        return { year: d.getFullYear(), month: d.getMonth() };
    });
    const { year, month } = view;

    const shiftMonth = (delta) => {
        const d = new Date(year, month + delta, 1);
        setView({ year: d.getFullYear(), month: d.getMonth() });
    };

    const min = minDate && startOfDay(minDate);
    const canGoBack = !min || new Date(year, month, 1) > new Date(min.getFullYear(), min.getMonth(), 1);

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const leadingBlanks = new Date(year, month, 1).getDay();
    const title = new Date(year, month, 1).toLocaleString('en-AU', { month: 'long', year: 'numeric' });

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={() => shiftMonth(-1)}
                    disabled={!canGoBack}
                    aria-label="Previous month"
                    className="p-2 rounded-lg hover:bg-blue-50 disabled:opacity-30 disabled:hover:bg-transparent"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <div className="text-xl font-semibold text-gray-800">{title}</div>
                <button
                    onClick={() => shiftMonth(1)}
                    aria-label="Next month"
                    className="p-2 rounded-lg hover:bg-blue-50"
                >
                    <ChevronLeftIcon className="w-5 h-5 rotate-180" />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {WEEKDAYS.map((day, i) => (
                    <div key={`hdr-${i}`} className="py-3 text-gray-500 font-medium">{day}</div>
                ))}
                {Array.from({ length: leadingBlanks }, (_, i) => <div key={`blank-${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => {
                    const date = new Date(year, month, i + 1);
                    const isSelected = isSameDay(date, selectedDate);
                    const isDisabled = Boolean(min) && date < min;
                    return (
                        <button
                            key={i}
                            onClick={() => onSelect(date)}
                            disabled={isDisabled}
                            className={`py-3 rounded-lg transition-colors ${isSelected
                                ? 'bg-blue-600 text-white'
                                : isDisabled
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'cursor-pointer hover:bg-blue-50'
                                }`}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

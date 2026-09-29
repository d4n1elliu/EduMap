import { useState } from 'react';
import Alert from '../../components/ui/Alert';
import MonthCalendar from '../../components/ui/MonthCalendar';
import { combineDateAndTime, formatDuration } from '../../lib/time';
import { DEFAULT_DURATION, DURATIONS, TIME_SLOTS } from './buddyConstants';

function OptionButton({ selected, disabled, onClick, className, children }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className} rounded-lg border text-sm font-medium transition-colors ${selected
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-blue-300 hover:border-slate-300 hover:bg-slate-50'
                }`}
        >
            {children}
        </button>
    );
}

// Date / time / duration picker. onBook resolves to an error message, or null on success.
export default function BookingForm({ onBook }) {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [duration, setDuration] = useState(DEFAULT_DURATION);
    const [isBooking, setIsBooking] = useState(false);
    const [error, setError] = useState('');

    // A slot is unavailable once its start time has passed (only matters for today)
    const isPastSlot = (slot) => Boolean(date) && combineDateAndTime(date, slot) < new Date();

    const canBook = !isBooking && date && time && !isPastSlot(time);

    const handleBook = async () => {
        if (!date || !time) {
            setError('Please select a mentor, date, and time');
            return;
        }
        setIsBooking(true);
        setError('');
        const bookingError = await onBook({ date, time, durationMinutes: duration });
        if (bookingError) {
            setError(bookingError);
            setIsBooking(false);
        }
    };

    return (
        <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Book a Session</h3>
            <p className="text-blue-600 mb-6 text-lg">Choose your preferred date and time for a mentor session.</p>

            <MonthCalendar selectedDate={date} onSelect={setDate} minDate={new Date()} />

            <div className="mb-6">
                <p className="text-base font-medium text-blue-700 mb-4">Available Time Slots:</p>
                <div className="grid grid-cols-4 gap-3">
                    {TIME_SLOTS.map((slot) => (
                        <OptionButton
                            key={slot}
                            selected={time === slot}
                            disabled={isPastSlot(slot)}
                            onClick={() => setTime(slot)}
                            className="px-4 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            {slot}
                        </OptionButton>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <p className="text-base font-medium text-blue-700 mb-4">Session Duration:</p>
                <div className="flex gap-3">
                    {DURATIONS.map((minutes) => (
                        <OptionButton key={minutes} selected={duration === minutes} onClick={() => setDuration(minutes)} className="px-4 py-2">
                            {formatDuration(minutes)}
                        </OptionButton>
                    ))}
                </div>
            </div>

            <Alert>{error}</Alert>

            <button
                onClick={handleBook}
                disabled={!canBook}
                className={`w-full mt-4 py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${canBook
                    ? 'bg-orange-700 text-white hover:bg-green-800'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    }`}
            >
                {isBooking ? 'BOOKING...' : 'BOOK SESSION'}
            </button>
        </div>
    );
}

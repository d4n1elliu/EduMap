import useToggleList from '../../hooks/useToggleList';

const slotId = (day, time) => `${day}-${time}`;

// Day x time grid; events fill their slot, empty slots can be toggled as "selected"
export default function WeeklyTimetable({ days, timeSlots, events, legend }) {
    const [selectedSlots, toggleSlot] = useToggleList();

    const eventAt = (day, time) => events.find((e) => e.day === day && e.time === time);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Days header */}
            <div className="grid grid-cols-8 gap-2 mb-4">
                <div className="p-4"></div>
                {days.map((day) => (
                    <div key={day} className="p-4 text-center font-semibold text-gray-700 bg-gray-50 rounded-lg">{day}</div>
                ))}
            </div>

            <div className="space-y-2">
                {timeSlots.map((time) => (
                    <div key={time} className="grid grid-cols-8 gap-2">
                        <div className="p-3 text-sm font-medium text-gray-500 bg-gray-50 rounded-lg flex items-center justify-center">
                            {time}
                        </div>

                        {days.map((day) => {
                            const event = eventAt(day, time);
                            const isSelected = selectedSlots.includes(slotId(day, time));

                            return (
                                <div
                                    key={slotId(day, time)}
                                    onClick={() => toggleSlot(slotId(day, time))}
                                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all min-h-16 ${event
                                        ? `${event.color} border-transparent hover:opacity-90`
                                        : isSelected
                                            ? 'bg-blue-100 border-blue-400'
                                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                        }`}
                                >
                                    {event && (
                                        <div className="text-xs font-medium text-gray-800">
                                            {event.title}
                                            <div className="text-xs text-gray-600 mt-1">
                                                {event.type === 'booking' ? 'Mentor Session' : 'Event'}
                                            </div>
                                        </div>
                                    )}
                                    {!event && isSelected && (
                                        <div className="text-xs text-blue-600 font-medium">Selected</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Legend</h3>
                <div className="flex flex-wrap gap-4">
                    {legend.map(({ label, swatch }) => (
                        <div key={label} className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded ${swatch}`}></div>
                            <span className="text-sm text-gray-600">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {selectedSlots.length > 0 && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">{selectedSlots.length} time slot(s) selected</h3>
                    <div className="text-sm text-blue-600">Click on slots to select/deselect them for scheduling</div>
                </div>
            )}
        </div>
    );
}

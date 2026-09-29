import { PLANNER_LEGEND, PLANNER_TIME_SLOTS, SAMPLE_EVENTS, WEEK_DAYS } from './profileData';
import WeeklyTimetable from './WeeklyTimetable';

const BUTTON = 'text-white font-semibold py-3 px-6 rounded-lg transition-colors';

export default function PlannerTab() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Weekly Timetable</h1>

            <div className="flex gap-4 mb-6">
                <button className={`${BUTTON} bg-blue-500 hover:bg-blue-600 flex items-center gap-2`}>
                    <span>🔍</span>
                    Find Events
                </button>
                <button className={`${BUTTON} bg-green-500 hover:bg-green-600 flex items-center gap-2`}>
                    <span>👨‍🏫</span>
                    Book Mentor Sessions
                </button>
            </div>

            <WeeklyTimetable
                days={WEEK_DAYS}
                timeSlots={PLANNER_TIME_SLOTS}
                events={SAMPLE_EVENTS}
                legend={PLANNER_LEGEND}
            />

            <div className="flex justify-center gap-4 mt-6">
                <button className={`${BUTTON} bg-orange-500 hover:bg-orange-600`}>Export Schedule</button>
                <button className={`${BUTTON} bg-indigo-500 hover:bg-indigo-600`}>Set Availability</button>
                <button className={`${BUTTON} bg-teal-500 hover:bg-teal-600`}>Sync Calendar</button>
            </div>
        </div>
    );
}

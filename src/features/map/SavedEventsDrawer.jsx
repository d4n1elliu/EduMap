import { mentorEmoji } from '../buddy/mentorUtils';

const hasCoords = (e) => Number.isFinite(e.latitude) && Number.isFinite(e.longitude);

// Right-hand panel listing saved events
export default function SavedEventsDrawer({ events, onClose, onView }) {
    return (
        <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl ring-1 ring-slate-200 z-[1000] p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">Saved Events</div>
                <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
            </div>

            {events.length === 0 ? (
                <div className="text-slate-500">No saved events yet.</div>
            ) : (
                <ul className="space-y-3">
                    {events.map((e) => (
                        <li key={e.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                            <div className="flex flex-row justify-between items-center gap-2">
                                <div>
                                    <div className="font-medium text-slate-800">{e.title}</div>
                                    {hasCoords(e) && (
                                        <div className="text-xs text-slate-500">{e.latitude.toFixed(4)}, {e.longitude.toFixed(4)}</div>
                                    )}
                                </div>
                                <div>{mentorEmoji(e)}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => onView(e)}
                                    disabled={!hasCoords(e)}
                                    className="rounded bg-blue-600 text-white px-2 py-1 text-xs hover:bg-blue-500 disabled:opacity-50"
                                >
                                    View
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

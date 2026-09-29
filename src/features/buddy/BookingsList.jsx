import Spinner from '../../components/ui/Spinner';
import { mentorEmoji } from './mentorUtils';

const ACTION_BUTTON = 'text-white px-4 py-2 rounded-lg transition-colors text-sm';

function BookingItem({ booking, mentor, onConfirm }) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="text-3xl">{mentorEmoji(mentor)}</div>
                    <div>
                        <h3 className="font-semibold text-gray-800">{booking.firstName} {booking.lastName}</h3>
                        <p className="text-sm text-gray-600">{booking.course?.name || 'Course not specified'}</p>
                        <p className="text-sm text-gray-500">
                            Session Time: {new Date(booking.startTime).toLocaleString()}
                        </p>
                        <p className={`text-sm ${booking.isConfirmed ? 'text-green-600' : 'text-orange-600'}`}>
                            {booking.isConfirmed ? 'Confirmed' : 'Pending Confirmation'}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <button className={`${ACTION_BUTTON} bg-green-600 hover:bg-green-700`}>Message</button>
                    {!booking.isConfirmed && (
                        <button onClick={() => onConfirm(booking.id)} className={`${ACTION_BUTTON} bg-blue-600 hover:bg-blue-700`}>
                            Confirm
                        </button>
                    )}
                    <button className={`${ACTION_BUTTON} bg-orange-500 hover:bg-orange-600`}>Reschedule</button>
                    <button className={`${ACTION_BUTTON} bg-red-600 hover:bg-red-700`}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

// "My Bookings" tab content
export default function BookingsList({ bookings, mentors, isLoading, onConfirm }) {
    if (isLoading) return <Spinner label="Loading bookings..." />;

    if (bookings.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-600">No bookings found. Book a mentor to get started!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {bookings.map((booking) => (
                <BookingItem
                    key={booking.id}
                    booking={booking}
                    mentor={mentors.find((m) => m.id === booking.mentorId)}
                    onConfirm={onConfirm}
                />
            ))}
        </div>
    );
}

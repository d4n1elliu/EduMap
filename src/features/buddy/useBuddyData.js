import { useCallback, useEffect, useState } from 'react';
import { bookMentor, confirmBooking, getMentors, getMyBookings } from '../../api/booking';
import { combineDateAndTime } from '../../lib/time';
import { isBookingSuccess } from './mentorUtils';

// Load the mentor list once on mount
export function useMentors() {
    const [mentors, setMentors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await getMentors();
                setMentors(response.data.data || []);
            } catch (error) {
                console.error('Failed to load mentors:', error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return { mentors, isLoading };
}

// The current user's bookings plus actions to create/confirm them
export function useBookings(token) {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const reload = useCallback(async () => {
        if (!token) return;
        setIsLoading(true);
        try {
            const response = await getMyBookings(token);
            setBookings(response.data.data || []);
        } catch (error) {
            console.error('Failed to load bookings:', error);
        } finally {
            setIsLoading(false);
        }
    }, [token]);

    // Returns an error message, or null when the booking succeeded
    const book = async ({ mentorId, date, time, durationMinutes }) => {
        try {
            const result = await bookMentor({
                startTime: combineDateAndTime(date, time).toISOString(),
                durationMinutes,
                mentorId,
            }, token);

            if (!isBookingSuccess(result)) {
                return result?.data?.message || result?.message || 'Failed to create booking';
            }
            await reload();
            return null;
        } catch (error) {
            console.error('Booking error:', error.response?.status, error.response?.data ?? error);
            return `Failed to create booking: ${error.response?.data?.message || error.message}`;
        }
    };

    const confirm = async (bookingId) => {
        if (!token) return;
        try {
            const result = await confirmBooking(bookingId, token);
            if (result.success) {
                await reload();
            } else {
                console.error('Failed to confirm booking:', result.message);
            }
        } catch (error) {
            console.error('Confirmation error:', error);
        }
    };

    return { bookings, isLoading, reload, book, confirm };
}

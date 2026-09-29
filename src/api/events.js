import api from './client';
import { authConfig } from '../lib/auth';
import { BUDDY_BASE, getMentors, getMyBookings } from './booking';

// Turn a booking into a map marker using its mentor's coordinates
function toBookingMarker(booking, mentor) {
    if (!mentor || mentor.latitude == null || mentor.longitude == null) return null;
    return {
        id: booking.id,
        mentorId: mentor.id,
        name: `${mentor.firstName} ${mentor.lastName}`,
        firstName: mentor.firstName,
        lastName: mentor.lastName,
        course: mentor.course,
        latitude: mentor.latitude,
        longitude: mentor.longitude,
        startTime: booking.startTime,
        durationMinutes: booking.duration, // C# TimeSpan string
        source: 'booking',
    };
}

// Markers for every booked mentor session
export async function getMapMarkers(token) {
    const [mentorsRes, bookingsRes] = await Promise.all([
        getMentors(),
        getMyBookings(token),
    ]);

    const mentors = mentorsRes.data.data || [];
    const bookings = bookingsRes.data.data || [];
    const mentorsById = new Map(mentors.map((m) => [m.id, m]));

    return bookings
        .map((b) => toBookingMarker(b, mentorsById.get(b.mentorId)))
        .filter(Boolean);
}

/** GET /api/BuddySystem/get-events */
export async function getSavedEvents(token) {
    const { data } = await api.get(`${BUDDY_BASE}/get-events`, authConfig(token));
    return data.data;
}

/** POST /api/BuddySystem/save-event */
export async function saveEvent(event, token) {
    const { data } = await api.post(`${BUDDY_BASE}/save-event`, event, authConfig(token));
    return data.data;
}

import api from './client';
import { authConfig } from '../lib/auth';
import { minutesToTimeSpan } from '../lib/time';

export const BUDDY_BASE = '/BuddySystem';

/** GET /api/BuddySystem/get-bookings */
export async function getMyBookings(token) {
    return await api.get(`${BUDDY_BASE}/get-bookings`, authConfig(token));
}

/** GET /api/BuddySystem/get-mentors */
export async function getMentors() {
    return await api.get(`${BUDDY_BASE}/get-mentors`);
}

/** POST /api/BuddySystem/create-booking */
export async function bookMentor({ startTime, durationMinutes, mentorId }, token) {
    const payload = {
        startTime,
        duration: minutesToTimeSpan(durationMinutes),
        mentorId: Number(mentorId),
    };
    const { data } = await api.post(`${BUDDY_BASE}/create-booking`, payload, authConfig(token));
    return data;
}

/** POST /api/BuddySystem/confirm-booking  (body = int bookingId) */
export async function confirmBooking(bookingId, token) {
    const { data } = await api.post(`${BUDDY_BASE}/confirm-booking`, bookingId, authConfig(token));
    return data;
}

/** GET /api/BuddySystem/mentor-availability?mentorId */
export async function getMentorAvailability(mentorId, token) {
    return await api.get(`${BUDDY_BASE}/mentor-availability`, mentorId, authConfig(token));
}

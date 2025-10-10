// src/api/js/booking.js
import api from './api'; 

const BUDDY_BASE = '/buddysystem'; // relative to /api

// helper: minutes -> "HH:mm:ss" (TimeSpan)
function toHHMMSS(minutes) {
  const hh = String(Math.floor(minutes / 60)).padStart(2, "0");
  const mm = String(minutes % 60).padStart(2, "0");
  return `${hh}:${mm}:00`;
}

const auth = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

/** GET /api/buddysystem/get-bookings */
export async function getMyBookings(token) {
  const { data } = await api.get(`${BUDDY_BASE}/get-bookings`, auth(token));
  return data?.responseData ?? data;
}

/** POST /api/buddysystem/create-booking
 * body: { startTime: ISO string, duration: "HH:mm:ss", mentorId: number }
 */
export async function bookMentor({ startTime, durationMinutes, mentorId }, token) {
  const payload = {
    startTime,
    duration: toHHMMSS(Number(durationMinutes)),
    mentorId: Number(mentorId),
  };
  const { data } = await api.post(`${BUDDY_BASE}/create-booking`, payload, auth(token));
  return data;
}

/** GET /api/buddysystem/confirm-booking?bookingId={id} */
export async function confirmBooking(bookingId, token) {
  const { data } = await api.get(
    `${BUDDY_BASE}/confirm-booking`,
    { ...auth(token), params: { bookingId } }
  );
  return data;
}

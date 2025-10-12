import api from "./api";

const BUDDY_BASE = "/BuddySystem";

// minutes -> "HH:mm:ss"
function toHHMMSS(minutes) {
  const m = Number(minutes) || 0;
  const hh = String(Math.floor(m / 60)).padStart(2, "0");
  const mm = String(m % 60).padStart(2, "0");
  return `${hh}:${mm}:00`;
}

// get a clean token string
function getAuthToken(token) {
  console.log(token);
  return (token || localStorage.getItem("token") || "")
    .replace(/^"(.+)"$/, "$1") // strip accidental surrounding quotes
    .trim();
}

// keep this helper; return the Axios config object
const auth = (token) => ({
  headers: {
      Authorization: `Bearer ${getAuthToken(token)}`,
  }
});

/** GET /api/BuddySystem/get-bookings */
export async function getMyBookings(token) {
  return await api.get(`${BUDDY_BASE}/get-bookings`, auth(token));
}

/** GET /api/BuddySystem/get-mentors */
export async function getMentors() {
  return await api.get(`${BUDDY_BASE}/get-mentors`);
}

/** POST /api/BuddySystem/create-booking */
export async function bookMentor({ startTime, durationMinutes, mentorId }, token) {
  const payload = {
    startTime,
    duration: toHHMMSS(durationMinutes),
    mentorId: Number(mentorId),
  };
  console.log(payload);
  const { data } = await api.post(`${BUDDY_BASE}/create-booking`, payload, auth(token));
  return data;
}

/** POST /api/BuddySystem/confirm-booking  (body = int bookingId) */
export async function confirmBooking(bookingId, token) {
  const { data } = await api.post(`${BUDDY_BASE}/confirm-booking`, bookingId, auth(token));
  return data;
}

/* get /api/buddySystem/mentor-availability? mentorId */
export async function getMentorAvailability(mentorId, token) {
  return await api.get(`${BUDDY_BASE}/mentor-availability`, mentorId, auth(token));
}
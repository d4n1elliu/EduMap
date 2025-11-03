import api from "./api";

const BUDDY_BASE = "/BuddySystem";

/*export async function searchMentors(query) {
  try {
    const { data } = await api.get(`/mentors`, { params: { q: query } });
    return data; // expect array of { id, name, lat, lng, role }
  } catch (err) {
    // Fallback mock around UTS if backend not ready
    const mock = [
      { id: "m1", name: "Alice Chen", role: "Data Mentor", lat: -33.8839, lng: 151.1990 },
      { id: "m2", name: "Liam Patel", role: "Web Mentor", lat: -33.8831, lng: 151.2011 },
      { id: "m3", name: "Sara Nguyen", role: "AI Mentor", lat: -33.8847, lng: 151.1982 },
    ];
    return mock.filter(m => m.name.toLowerCase().includes((query||"").toLowerCase()));
  }
}

export async function getSavedEvents() {
  const raw = localStorage.getItem("savedEvents");
  return raw ? JSON.parse(raw) : [];
}

export async function saveEvent(event) {
  const current = await getSavedEvents();
  const exists = current.some(e => e.id === event.id);
  const next = exists ? current : [...current, event];
  localStorage.setItem("savedEvents", JSON.stringify(next));
  return next;
}

export async function removeSavedEvent(id) {
  const current = await getSavedEvents();
  const next = current.filter(e => e.id !== id);
  localStorage.setItem("savedEvents", JSON.stringify(next));
  return next;
}

export async function getBuddySavedMentors() {
  const raw = localStorage.getItem("buddySavedMentors");
  return raw ? JSON.parse(raw) : [];
} */
const token = localStorage.getItem('token');
// get a clean token string
function getAuthToken(t) {
  return (token || localStorage.getItem("token") || "")
    .replace(/^"(.+)"$/, "$1") // strip accidental surrounding quotes
    .trim();
}

// keep this helper; return the Axios config object
const auth = (t) => ({
  headers: {
      Authorization: `Bearer ${getAuthToken(token)}`,
  }
});

export async function getMapMarkers(token) {
  // 1) fetch mentors & my bookings in parallel
  const mentorsRes = await api.get(`${BUDDY_BASE}/get-mentors`);
  const bookingsRes = await api.get(`${BUDDY_BASE}/get-bookings`, auth(token));

  const mentors = (mentorsRes.data.data) || [];
  const bookings = (bookingsRes.data.data) || [];

  const byId = new Map(mentors.map((m) => [m.id, m]));

  // 2) turn each booking into a map marker (uses mentor lat/lng from backend)
  const bookingMarkers = bookings
    .map((b) => {
      const m = byId.get(b.mentorId); // Need to add this to the backend
      if (!m || m.latitude == null || m.longitude == null) return null;
      return {
        id: b.id,
        mentorId: m.id,
        name: `${m.firstName} ${m.lastName}`,
        firstName: m.firstName,
        lastName: m.lastName,
        course: m.course,
        latitude: m.latitude, // Need to add this to backend
        longitude: m.longitude, // Need to add this to backend
        startTime: b.startTime,
        durationMinutes: b.duration, // Translate C# TimeSpan to javascript minutes
        source: "booking",
      };
    })
    .filter(Boolean);
  
  console.log(bookingMarkers);
  
  return bookingMarkers;
}

/** GET /api/BuddySystem/get-events */
export async function getSavedEvents(t) {
  const token = localStorage.getItem('token');
  const { data } = await api.get(`${BUDDY_BASE}/get-events`, auth(token));
  return data.data;
}

/** POST /api/BuddySystem/save-event */
export async function saveEvent(event) {
  const token = localStorage.getItem('token');
  const { data } = await api.post(`${BUDDY_BASE}/save-event`, event, auth(token));
  return data.data;
}

/*
export async function removeSavedEvent(id) {
  const current = await getSavedEvents();
  const next = current.filter(e => e.id !== id);
  localStorage.setItem(savedEvents, JSON.stringify(next));
  return next;
}
*/
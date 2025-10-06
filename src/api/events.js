import api from "./api";

export async function searchMentors(query) {
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
}



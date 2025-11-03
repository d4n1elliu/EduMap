import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useMemo, useRef, useState } from 'react';
//import { searchMentors, getSavedEvents, saveEvent, removeSavedEvent, getBuddySavedMentors } from '../api/events';
import { getMapMarkers, getSavedEvents, saveEvent } from '../api/events';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import blueMarker from '../assets/blueMarker.png';
import humanMarker from '../assets/humanMarker.png';

// Fix default marker icons for Vite builds
L.Icon.Default.mergeOptions({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
});

/* Custom marker icon for mentors/events */
const mentorIcon = L.icon({
    iconUrl: humanMarker,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
    shadowUrl,
    shadowSize: [41, 41],
    shadowAnchor: [13, 41],
});

/* Blue pin used for the main campus location */
const locationIcon = L.icon({
    iconUrl: blueMarker,
    iconSize: [40, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
    shadowUrl,
    shadowSize: [41, 41],
    shadowAnchor: [13, 41],
});

export default function EventsAndNetworkingMap() {
    // UTS, Ultimo
    const center = useMemo(() => ([-33.8830, 151.1997]), []);
    const [query, setQuery] = useState("");
    //const [results, setResults] = useState([]);
    const [markers, setMarkers] = useState([]);
    const token = localStorage.getItem('token') || '';
    const [saved, setSaved] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const mapRef = useRef(null);

    /* Load mentors from Buddy Program (saved)
    const [buddyMentors, setBuddyMentors] = useState([]);
    useEffect(() => {
        const ids = (localStorage.getItem('buddySavedMentors')) ? JSON.parse(localStorage.getItem('buddySavedMentors')) : [];
        setBuddyMentors(ids);
    }, []);*/

    /*useEffect(() => {
         const t = setTimeout(async () => {
             // if user has saved mentors from buddy program and no query, show those first
             if (!query && buddyMentors.length > 0) {
                 const base = await searchMentors('');
                 setResults(base.filter(m => buddyMentors.includes(m.id)));
             } else {
                 const data = await searchMentors(query);
                 setResults(data);
             }
         }, 300);
         return () => clearTimeout(t);
     }, [query, buddyMentors]);*/

    useEffect(() => {
        (async () => {
            const data = await getMapMarkers(token); // [{ id, name, role, lat, lng, ... }]
            setMarkers(data);
            const s = await getSavedEvents("aaaaaaaa")
            setSaved(s);
        })();
    }, [token]);

    const results = useMemo(() => {
        const q = query.toLowerCase();
        return markers.filter(
            (m) =>
                (m.name || '').toLowerCase().includes(q) ||
                (m.role || '').toLowerCase().includes(q)
        );
    }, [markers, query]);

    return (
        <div className="px-0 pb-0">
            {/* Full-height map area under the fixed navbar (h = viewport - 6rem header) */}
            <div className="w-screen relative" style={{ height: 'calc(100vh - 6rem)' }}>
                {/* Search input overlay */}
                <div className="absolute top-4 left-15 right-auto w-full max-w-md z-[1000]">
                    <div className="rounded-full bg-white/80 shadow ring-1 ring-slate-300 px-4 py-2 flex items-center gap-4">
                        <svg className="h-5 w-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search mentors..." className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400" />
                    </div>
                    {query && results.length > 0 && (
                        <div className="mt-2 max-h-56 overflow-auto rounded-xl bg-white shadow ring-1 ring-slate-200">
                            {results.map(m => (
                                <button key={m.id} onClick={() => mapRef.current?.setView([m.lat, m.lng], 18)} className="w-full text-left px-3 py-2 hover:bg-slate-50">
                                    <div className="font-medium text-slate-800">{m.name}</div>
                                    <div className="text-sm text-slate-500">{m.role}</div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Button to open/close the Saved drawer */}
                <button onClick={() => setDrawerOpen(v => !v)} className="absolute top-4 right-4 z-[1000] rounded-xl bg-orange-500 text-white px-4 py-2 shadow hover:bg-orange-400">
                    Saved Events
                </button>

                {/* Map */}
                <MapContainer whenCreated={(m) => { mapRef.current = m; }} center={center} zoom={16} style={{ height: '100%', width: '100%' }}>
                    {/* Base without POI icons */}
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                        url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
                        subdomains={['a', 'b', 'c', 'd']}
                    />
                    {/* Labels only overlay */}
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                        url='https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png'
                        subdomains={['a', 'b', 'c', 'd']}
                    />
                    {/* Campus markers */}
                    <Marker position={center} icon={locationIcon}>
                        <Popup>
                            <div className="space-y-2">
                                <div className="font-semibold">UTS, Ultimo NSW 2007</div>
                                <div className="text-sm text-slate-600">Campus location</div>
                            </div>
                        </Popup>
                    </Marker>

                    {/* Dynamic mentor/event markers */}
                    {markers.map(m => (
                        <Marker key={m.id} position={[m.latitude, m.longitude]} icon={mentorIcon}>
                            <Popup>
                                <div className="space-y-1">
                                    <div className="font-semibold">{m.firstName + " " + m.lastName}</div>
                                    <div className="text-sm text-slate-600">{m.course}</div>
                                    <button
                                        onClick={async () => setSaved(await saveEvent({ mentorId: m.mentorId, fullName: m.firstName + " " + m.lastName, latitude: m.latitude, longitude: m.longitude }))}
                                        className="mt-1 rounded bg-orange-500 text-white px-3 py-1 text-sm hover:bg-orange-400"
                                    >
                                        Save
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                {/* Saved drawer */}
                {drawerOpen && (
                    <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl ring-1 ring-slate-200 z-[1000] p-4 overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-lg font-semibold">Saved Events</div>
                            <button onClick={() => setDrawerOpen(false)} className="text-slate-500 hover:text-slate-700">Close</button>
                        </div>
                        {saved.length === 0 ? (
                            <div className="text-slate-500">No saved events yet.</div>
                        ) : (
                            <ul className="space-y-3">
                                {saved.map(e => (
                                    <li key={e.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                                        <div className="flex flex-row justify-between items-center gap-2">
                                            <div>
                                                <div className="font-medium text-slate-800">{e.title}</div>
                                                <div className="text-xs text-slate-500">{e.lat.toFixed(4)}, {e.lng.toFixed(4)}</div>
                                            </div>
                                            <div>
                                                {e.profileEmoji || "👩‍🏫"}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => { mapRef.current?.setView([e.lat, e.lng], 18); setDrawerOpen(false); }} className="rounded bg-blue-600 text-white px-2 py-1 text-xs hover:bg-blue-500">View</button>
                                            {/*<button onClick={async () => setSaved(await removeSavedEvent(e.id))} className="rounded bg-slate-200 text-slate-700 px-2 py-1 text-xs hover:bg-slate-300">Remove</button> */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
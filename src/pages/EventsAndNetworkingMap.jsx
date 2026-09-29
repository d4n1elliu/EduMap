import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { getMapMarkers, getSavedEvents, saveEvent } from '../api/events';
import { getToken } from '../lib/auth';
import { CAMPUS, DEFAULT_ZOOM, FOCUS_ZOOM, TILE_LAYERS, campusIcon, mentorIcon } from '../features/map/mapConfig';
import MapSearch from '../features/map/MapSearch';
import SavedEventsDrawer from '../features/map/SavedEventsDrawer';
import usePageMeta from '../hooks/usePageMeta';
import { PATHS } from '../config/routes';

export default function EventsAndNetworkingMap() {
    usePageMeta('Events Map', PATHS.EVENTS_MAP);
    const token = getToken();
    const [query, setQuery] = useState('');
    const [markers, setMarkers] = useState([]);
    const [saved, setSaved] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const mapRef = useRef(null);

    const loadSaved = useCallback(async () => {
        try {
            setSaved(await getSavedEvents(token));
        } catch (error) {
            console.error('Failed to load saved events:', error);
        }
    }, [token]);

    useEffect(() => {
        (async () => {
            try {
                setMarkers(await getMapMarkers(token));
            } catch (error) {
                console.error('Failed to load map markers:', error);
            }
        })();
        loadSaved();
    }, [token, loadSaved]);

    const results = useMemo(() => {
        const q = query.toLowerCase();
        return markers.filter(
            (m) => (m.name || '').toLowerCase().includes(q) || String(m.course ?? '').toLowerCase().includes(q)
        );
    }, [markers, query]);

    const focusOn = ({ latitude, longitude }) => mapRef.current?.setView([latitude, longitude], FOCUS_ZOOM);

    const handleSave = async (m) => {
        try {
            await saveEvent({ mentorId: m.mentorId, fullName: m.name, latitude: m.latitude, longitude: m.longitude }, token);
            await loadSaved();
        } catch (error) {
            console.error('Failed to save event:', error);
        }
    };

    return (
        <div className="px-0 pb-0">
            {/* Full-height map area under the fixed navbar (viewport - 6rem header) */}
            <div className="w-screen relative" style={{ height: 'calc(100vh - 6rem)' }}>
                <MapSearch
                    query={query}
                    onQueryChange={setQuery}
                    results={results}
                    onSelect={focusOn}
                />

                <button
                    onClick={() => setDrawerOpen((v) => !v)}
                    className="absolute top-4 right-4 z-[1000] rounded-xl bg-orange-500 text-white px-4 py-2 shadow hover:bg-orange-400"
                >
                    Saved Events
                </button>

                <MapContainer
                    ref={mapRef}
                    center={CAMPUS.position}
                    zoom={DEFAULT_ZOOM}
                    style={{ height: '100%', width: '100%' }}
                >
                    {TILE_LAYERS.map((layer) => <TileLayer key={layer.url} {...layer} />)}

                    <Marker position={CAMPUS.position} icon={campusIcon}>
                        <Popup>
                            <div className="space-y-2">
                                <div className="font-semibold">{CAMPUS.name}</div>
                                <div className="text-sm text-slate-600">{CAMPUS.description}</div>
                            </div>
                        </Popup>
                    </Marker>

                    {markers.map((m) => (
                        <Marker key={m.id} position={[m.latitude, m.longitude]} icon={mentorIcon}>
                            <Popup>
                                <div className="space-y-1">
                                    <div className="font-semibold">{m.name}</div>
                                    <div className="text-sm text-slate-600">{m.course}</div>
                                    <button
                                        onClick={() => handleSave(m)}
                                        className="mt-1 rounded bg-orange-500 text-white px-3 py-1 text-sm hover:bg-orange-400"
                                    >
                                        Save
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                {drawerOpen && (
                    <SavedEventsDrawer
                        events={saved}
                        onClose={() => setDrawerOpen(false)}
                        onView={(e) => { focusOn(e); setDrawerOpen(false); }}
                    />
                )}
            </div>
        </div>
    );
}

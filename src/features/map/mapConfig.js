import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import blueMarker from '../../assets/blueMarker.png';
import humanMarker from '../../assets/humanMarker.png';

// Fix default marker icons for Vite builds
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl });

const SHARED_ICON_OPTIONS = {
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
    shadowUrl,
    shadowSize: [41, 41],
    shadowAnchor: [13, 41],
};

/* Marker for mentors/events */
export const mentorIcon = L.icon({ iconUrl: humanMarker, iconSize: [32, 32], ...SHARED_ICON_OPTIONS });

/* Blue pin for the main campus location */
export const campusIcon = L.icon({ iconUrl: blueMarker, iconSize: [40, 32], ...SHARED_ICON_OPTIONS });

export const CAMPUS = {
    position: [-33.8830, 151.1997],
    name: 'UTS, Ultimo NSW 2007',
    description: 'Campus location',
};

// OpenStreetMap tiles go up to zoom 19, so keep these at or below that
export const DEFAULT_ZOOM = 16;
export const FOCUS_ZOOM = 18;

// OpenStreetMap's standard tiles need no API key but require this attribution
export const TILE_LAYERS = [
    {
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
    },
];

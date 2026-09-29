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

export const DEFAULT_ZOOM = 16;
export const FOCUS_ZOOM = 18;

const CARTO_ATTRIBUTION = '&copy; OpenStreetMap contributors &copy; CARTO';
const CARTO_SUBDOMAINS = ['a', 'b', 'c', 'd'];

// Base map without POI icons, then a labels-only overlay
export const TILE_LAYERS = [
    { url: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', attribution: CARTO_ATTRIBUTION, subdomains: CARTO_SUBDOMAINS },
    { url: 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', attribution: CARTO_ATTRIBUTION, subdomains: CARTO_SUBDOMAINS },
];

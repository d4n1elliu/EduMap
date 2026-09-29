// Must match the backend Gender enum: same order (0 Female, 1 Male, 2 NonBinary,
// 3 PreferNotToSay). Sign-up sends the value as a number.
export const GENDER_OPTIONS = [
    { value: 0, label: 'Female' },
    { value: 1, label: 'Male' },
    { value: 2, label: 'Non-binary' },
    { value: 3, label: 'Prefer not to say' },
];

// Same as the seed script
export const CAMPUSES = [
    { name: 'University of Technology Sydney', latitude: -33.8832, longitude: 151.2005 },
    { name: 'University of Sydney', latitude: -33.8886, longitude: 151.1873 },
    { name: 'University of New South Wales', latitude: -33.9173, longitude: 151.2313 },
    { name: 'Macquarie University', latitude: -33.7738, longitude: 151.1126 },
    { name: 'Western University', latitude: -33.8150, longitude: 151.0011 },
];

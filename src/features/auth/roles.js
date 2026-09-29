// Must match the backend's Role enum
export const Role = Object.freeze({
    STUDENT: 0,
    MENTOR: 1,
});

export const ROLE_OPTIONS = [
    { value: Role.STUDENT, label: 'Student' },
    { value: Role.MENTOR, label: 'Mentor' },
];

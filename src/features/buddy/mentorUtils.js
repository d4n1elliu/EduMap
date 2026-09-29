import { courseLabel } from '../../lib/courses';

// Readable course label
export function mentorCourse(mentor) {
    return courseLabel(mentor.studies || mentor.course);
}

export function mentorFullName(mentor) {
    return `${mentor.firstName} ${mentor.lastName}`;
}

// Lower-case text for comparisons; safe for enum values sent as numbers
const toText = (value) => String(value ?? '').toLowerCase();

// All filters must match
export function filterMentors(mentors, { gender = 'all', courses = [], search = '' }) {
    const query = search.trim().toLowerCase();

    return mentors.filter((mentor) => {
        const matchesGender = gender === 'all' || toText(mentor.gender) === gender.toLowerCase();
        const matchesCourses = courses.length === 0 || courses.includes(mentor.course);
        const matchesSearch = !query || [mentorFullName(mentor), mentor.course, courseLabel(mentor.course)]
            .some((text) => toText(text).includes(query));

        return matchesGender && matchesCourses && matchesSearch;
    });
}

// The booking API has reported success in a few different shapes
export function isBookingSuccess(result) {
    return result?.success === true || result?.message === 'Success' || result?.data?.message === 'Success';
}

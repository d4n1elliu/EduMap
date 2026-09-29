// Mentors may carry their course under `studies` or `course`
export function mentorCourse(mentor) {
    return (mentor.studies || mentor.course || '').toString();
}

export function mentorFullName(mentor) {
    return `${mentor.firstName} ${mentor.lastName}`;
}

// Apply the search box and sidebar filters
export function filterMentors(mentors, searchQuery, filters) {
    const query = searchQuery.toLowerCase();

    return mentors.filter((mentor) => {
        const course = mentorCourse(mentor).toLowerCase();

        const matchesSearch =
            (mentor.firstName || '').toLowerCase().includes(query) || course.includes(query);
        const matchesGender = filters.gender === 'all' || mentor.gender === filters.gender;
        const matchesCourses =
            filters.courses.length === 0 ||
            filters.courses.some((c) => course.includes(c.toLowerCase()));

        return matchesSearch && matchesGender && matchesCourses;
    });
}

// The booking API has reported success in a few different shapes
export function isBookingSuccess(result) {
    return result?.success === true || result?.message === 'Success' || result?.data?.message === 'Success';
}

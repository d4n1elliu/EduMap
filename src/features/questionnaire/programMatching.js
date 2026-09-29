import { DISCIPLINE_AREAS, PROGRAMS_BY_UNIVERSITY, SUBJECT_AREAS } from './questionnaireData';

// Areas of interest suggested by the chosen subjects (or disciplines if no subjects chosen)
export function getRelevantAreas(selectedSubjects, selectedDisciplines) {
    if (selectedSubjects.length === 0) {
        return selectedDisciplines.flatMap((discipline) => DISCIPLINE_AREAS[discipline] || []);
    }
    const areas = new Set(selectedSubjects.flatMap((subject) => SUBJECT_AREAS[subject] || []));
    return Array.from(areas);
}

// Unique programs matching the chosen areas: [{ university, name, url, area }]
export function getRecommendedPrograms(selectedAreas) {
    const seen = new Set();
    const programs = [];

    selectedAreas.forEach((area) => {
        Object.entries(PROGRAMS_BY_UNIVERSITY).forEach(([university, areaPrograms]) => {
            const program = areaPrograms[area];
            const key = `${university}|${program?.name}`;
            if (!program || seen.has(key)) return;
            seen.add(key);
            programs.push({ university, name: program.name, url: program.url, area });
        });
    });

    return programs;
}

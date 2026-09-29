// Static data behind the Course Questionnaire

// High school subjects (step 1) -> related areas of interest
export const SUBJECT_AREAS = {
    'English': ['Literature', 'Languages & Linguistics', 'Cultural Studies'],
    'Mathematics': ['Pure Mathematics', 'Data Science', 'Computer Science', 'Business Analytics'],
    'Science': ['Biology', 'Chemistry', 'Physics', 'Ecology', 'Geology', 'Marine Science', 'Astronomy'],
    'Economics': ['Economics', 'Accounting', 'Finance', 'Business Analytics'],
    'HSIE': [
        'History', 'Geography', 'Sociology', 'Anthropology', 'Political Science',
        'International Relations', 'Human Geography', 'Criminology',
    ],
    'Creative Arts': [
        'Fine Arts (Painting, Sculpture, ect)', 'Graphic Design', 'Digital Media',
        'Photography', 'Acting & Theatre', 'Music', 'Fashion Design',
    ],
    'PDHPE': [
        'Exercise Physiology', 'Sport & Exercise Science', 'Fitness & Personal Training',
        'Public Health', 'Nutrition & Dietetics',
    ],
    'Information Technology': [
        'Computer Science', 'Software Engineering', 'Information Systems', 'Cybersecurity',
        'Artificial Intelligence', 'Cloud Computing', 'Game Design', 'Software Development',
    ],
    'Languages': ['Languages & Linguistics', 'Cultural Studies'],
    'VET': ['Culinary Arts', 'Hospitality Management'],
    'Business': [
        'Accounting', 'Business Analytics', 'Economics', 'Entrepreneurship',
        'Finance', 'Human Resource Management', 'Marketing', 'Supply Chain & Logistics',
    ],
    'Legal Studies': [
        'Criminal Law', 'Corporate/Commercial Law', 'Constitutional Law',
        'Environment Law', 'Human Rights Law', 'International Law', 'Criminology',
    ],
    'Design and Technology': [
        'Architecture', 'Mechanical Engineering', 'Civil Engineering',
        'Electrical & Electronic Engineering', 'Software Engineering',
    ],
    'Music': ['Music', 'Sound Engineering', 'Acting & Theatre'],
};

// University disciplines (step 2) -> their specific areas
export const DISCIPLINE_AREAS = {
    'Arts & Humanities': [
        'Archaeology', 'History', 'Philosophy', 'Languages & Linguistics',
        'Literature', 'Cultural Studies', 'Religious Studies',
    ],
    'Creative Arts & Design': [
        'Fine Arts (Painting, Sculpture, ect)', 'Graphic Design', 'Digital Media',
        'Film & Screen Studies', 'Photography', 'Acting & Theatre', 'Music',
        'Fashion Design', 'Architecture',
    ],
    'Social Sciences': [
        'Anthropology', 'Criminology', 'Human Geography', 'International Relations',
        'Political Science', 'Psychology', 'Sociology',
    ],
    'Business': [
        'Accounting', 'Business Analytics', 'Economics', 'Entrepreneurship',
        'Finance', 'Human Resource Management', 'Marketing', 'Supply Chain & Logistics',
    ],
    'Education': [
        'Early Childhood Education', 'Primary Teaching', 'Secondary Teaching',
        'Educational Psychology', 'Special Education',
    ],
    'Engineering & Technology': [
        'Aerospace Engineering', 'Chemical Engineering', 'Civil Engineering',
        'Electrical & Electronic Engineering', 'Mechanical Engineering', 'Software Engineering',
        'Sound Engineering', 'Mechatronics', 'Robotics', 'Computer Science', 'Artificial Intelligence',
        'Cloud Computing', 'Cybersecurity', 'Data Science', 'Information Systems',
        'Game Design', 'Software Development',
    ],
    'Law': [
        'Criminal Law', 'Corporate/Commercial Law', 'Constitutional Law',
        'Environment Law', 'Human Rights Law', 'International Law',
    ],
    'Health Sciences & Medicine': [
        'Medicine', 'Nursing', 'Paramedics', 'Midwifery', 'Dentistry', 'Orthodontics',
        'Physiotherapy', 'Public Health', 'Nutrition & Dietetics',
        'Occupational Therapy', 'Veterinary',
    ],
    'Architecture': [
        'Construction Management', 'Urban Planning', 'Architecture',
        'Landscape Architecture', 'Property & Real Estate',
    ],
    'Communication & Media': [
        'Journalism', 'Media & Communications', 'Public Relations', 'Advertising',
        'Film & Television Production', 'Digital Media Strategy',
    ],
    'Food & Hospitality': ['Culinary Arts', 'Hospitality Management'],
    'Sports & Recreation': [
        'Exercise Physiology', 'Sport & Exercise Science',
        'Fitness & Personal Training', 'Leisure & Recreation Studies',
    ],
    'Science': [
        'Biology', 'Ecology', 'Physics', 'Chemistry', 'Astronomy', 'Material Spaces',
        'Geology', 'Geography', 'Marine Science', 'Pure Mathematics',
    ],
};

export const SUBJECTS = Object.keys(SUBJECT_AREAS);
export const DISCIPLINES = Object.keys(DISCIPLINE_AREAS);

export const STUDY_LEVELS = [
    'Certificates & Diplomas', "Bachelor's Degree", "Master's Degree", 'PhD & Doctorate',
];

export const PRIORITIES = [
    'Academic Support',
    'Tuition Costs',
    'Study Opportunities',
    'Campus Culture',
    'Student Satisfaction',
    'Career Outcomes',
    'Modern Facilities',
];

export const INTERNATIONAL_SUPPORT_OPTIONS = [
    'English or academic writing support',
    'Help finding accommodation',
    'Visa and work guidance',
    'Orientation or buddy programs',
];

/* ---------- University programs ---------- */

const utsCourse = (name, slug) => ({ name, url: `https://www.uts.edu.au/study/find-a-course/${slug}` });

const UTS = {
    arts: utsCourse('Bachelor of Arts', 'bachelor-arts'),
    visualArts: utsCourse('Bachelor of Visual Arts', 'bachelor-visual-arts'),
    design: utsCourse('Bachelor of Design', 'bachelor-design'),
    communication: utsCourse('Bachelor of Communication', 'bachelor-communication'),
    acting: utsCourse('Bachelor of Acting', 'bachelor-acting'),
    soundMusic: utsCourse('Bachelor of Sound and Music Design', 'bachelor-sound-and-music-design'),
    architecture: utsCourse('Bachelor of Design in Architecture', 'bachelor-design-architecture'),
    socialScience: utsCourse('Bachelor of Social Science', 'bachelor-social-science'),
    criminology: utsCourse('Bachelor of Criminology', 'bachelor-criminology'),
    internationalStudies: utsCourse('Bachelor of Arts (International, Social and Political Studies)', 'bachelor-arts-international-social-and-political-studies'),
    psychology: utsCourse('Bachelor of Psychology (Honours)', 'bachelor-psychology-honours'),
    accounting: utsCourse('Bachelor of Accounting', 'bachelor-accounting'),
    business: utsCourse('Bachelor of Business', 'bachelor-business'),
    economics: utsCourse('Bachelor of Economics', 'bachelor-economics'),
    management: utsCourse('Bachelor of Management', 'bachelor-management'),
    engineering: utsCourse('Bachelor of Engineering (Honours)', 'bachelor-engineering-honours'),
    computingScience: utsCourse('Bachelor of Computing Science (Honours)', 'bachelor-computing-science-honours'),
    scienceIT: utsCourse('Bachelor of Science in Information Technology', 'bachelor-science-information-technology'),
    cybersecurity: utsCourse('Bachelor of Cybersecurity', 'bachelor-cybersecurity'),
    games: utsCourse('Bachelor of Games and Interactive Environments', 'bachelor-games-and-interactive-environments'),
    educationEarlyPrimary: utsCourse('Bachelor of Education (Early Childhood and Primary)', 'bachelor-education-early-childhood-and-primary'),
    educationPrimary: utsCourse('Bachelor of Education (Primary)', 'bachelor-education-primary'),
    educationalStudies: utsCourse('Bachelor of Arts in Educational Studies', 'bachelor-arts-educational-studies'),
    laws: utsCourse('Bachelor of Laws', 'bachelor-laws'),
    medicalScience: utsCourse('Bachelor of Medical Science', 'bachelor-medical-science'),
    nursing: utsCourse('Bachelor of Nursing', 'bachelor-nursing'),
    paramedicine: utsCourse('Bachelor of Paramedicine', 'bachelor-paramedicine'),
    midwifery: utsCourse('Bachelor of Midwifery', 'bachelor-midwifery'),
    oralHealth: utsCourse('Bachelor of Oral Health', 'bachelor-oral-health'),
    physiotherapy: utsCourse('Bachelor of Physiotherapy (Honours)', 'bachelor-physiotherapy-honours'),
    publicHealth: utsCourse('Bachelor of Public Health', 'bachelor-public-health'),
    healthSciences: utsCourse('Bachelor of Health Sciences', 'bachelor-health-sciences'),
    occupationalTherapy: utsCourse('Bachelor of Occupational Therapy (Honours)', 'bachelor-occupational-therapy-honours'),
    veterinary: utsCourse('Bachelor of Veterinary Science', 'bachelor-veterinary-science'),
    constructionManagement: utsCourse('Bachelor of Construction Project Management', 'bachelor-construction-project-management'),
    urbanPlanning: utsCourse('Bachelor of Urban Planning', 'bachelor-urban-planning'),
    landscapeArchitecture: utsCourse('Bachelor of Landscape Architecture (Honours)', 'bachelor-landscape-architecture-honours'),
    propertyEconomics: utsCourse('Bachelor of Property Economics', 'bachelor-property-economics'),
    sportScience: utsCourse('Bachelor of Sport and Exercise Science', 'bachelor-sport-and-exercise-science'),
    sportManagement: utsCourse('Bachelor of Sport and Exercise Management', 'bachelor-sport-and-exercise-management'),
    scienceFlexible: { name: 'Bachelor of Science (Flexible)', url: 'https://www.uts.edu.au/courses/bachelor-of-science-flexible' },
};

// [program, areas that lead to it]
const UTS_PROGRAM_AREAS = [
    [UTS.arts, ['Archaeology', 'History', 'Philosophy', 'Languages & Linguistics', 'Literature', 'Cultural Studies', 'Religious Studies']],
    [UTS.visualArts, ['Fine Arts (Painting, Sculpture, ect)']],
    [UTS.design, ['Graphic Design', 'Digital Media', 'Photography', 'Fashion Design']],
    [UTS.communication, ['Film & Screen Studies', 'Journalism', 'Media & Communications', 'Public Relations', 'Advertising', 'Film & Television Production', 'Digital Media Strategy']],
    [UTS.acting, ['Acting & Theatre']],
    [UTS.soundMusic, ['Music', 'Sound Engineering']],
    [UTS.architecture, ['Architecture']],
    [UTS.socialScience, ['Anthropology', 'Human Geography']],
    [UTS.criminology, ['Criminology']],
    [UTS.internationalStudies, ['International Relations', 'Political Science', 'Sociology']],
    [UTS.psychology, ['Psychology']],
    [UTS.accounting, ['Accounting']],
    [UTS.business, ['Business Analytics', 'Entrepreneurship', 'Finance', 'Marketing', 'Supply Chain & Logistics']],
    [UTS.economics, ['Economics']],
    [UTS.management, ['Human Resource Management', 'Culinary Arts', 'Hospitality Management']],
    [UTS.engineering, ['Aerospace Engineering', 'Chemical Engineering', 'Civil Engineering', 'Electrical & Electronic Engineering', 'Mechanical Engineering', 'Software Engineering', 'Mechatronics', 'Robotics']],
    [UTS.computingScience, ['Computer Science', 'Artificial Intelligence', 'Data Science', 'Software Development']],
    [UTS.scienceIT, ['Cloud Computing', 'Information Systems']],
    [UTS.cybersecurity, ['Cybersecurity']],
    [UTS.games, ['Game Design']],
    [UTS.educationEarlyPrimary, ['Early Childhood Education']],
    [UTS.educationPrimary, ['Primary Teaching', 'Special Education']],
    [UTS.educationalStudies, ['Secondary Teaching', 'Educational Psychology']],
    [UTS.laws, ['Criminal Law', 'Corporate/Commercial Law', 'Constitutional Law', 'Environment Law', 'Human Rights Law', 'International Law']],
    [UTS.medicalScience, ['Medicine']],
    [UTS.nursing, ['Nursing']],
    [UTS.paramedicine, ['Paramedics']],
    [UTS.midwifery, ['Midwifery']],
    [UTS.oralHealth, ['Dentistry', 'Orthodontics']],
    [UTS.physiotherapy, ['Physiotherapy']],
    [UTS.publicHealth, ['Public Health']],
    [UTS.healthSciences, ['Nutrition & Dietetics']],
    [UTS.occupationalTherapy, ['Occupational Therapy']],
    [UTS.veterinary, ['Veterinary']],
    [UTS.constructionManagement, ['Construction Management']],
    [UTS.urbanPlanning, ['Urban Planning']],
    [UTS.landscapeArchitecture, ['Landscape Architecture']],
    [UTS.propertyEconomics, ['Property & Real Estate']],
    [UTS.sportScience, ['Exercise Physiology', 'Sport & Exercise Science']],
    [UTS.sportManagement, ['Fitness & Personal Training', 'Leisure & Recreation Studies']],
    [UTS.scienceFlexible, ['Biology', 'Ecology', 'Physics', 'Chemistry', 'Astronomy', 'Material Spaces', 'Geology', 'Geography', 'Marine Science', 'Pure Mathematics']],
];

// Flip [program, areas] pairs into { area: program }
const byArea = (pairs) =>
    Object.fromEntries(pairs.flatMap(([program, areas]) => areas.map((area) => [area, program])));

// University -> { area: program }. Add another university here to include it in recommendations.
export const PROGRAMS_BY_UNIVERSITY = {
    UTS: byArea(UTS_PROGRAM_AREAS),
};

export const UNIVERSITY_INFO = {
    UTS: { name: 'University of Technology Sydney (UTS)', coursesUrl: 'https://www.uts.edu.au/courses' },
};

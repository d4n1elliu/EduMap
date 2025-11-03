import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from './Background';
import ProfileSetup from './ProfileSetup';
import Footer from './Footer';

export default function CourseQuestionnaire() {

    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // State for storing questionnaire responses
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedDisciplines, setSelectedDisciplines] = useState([]);
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [studyLevel, setStudyLevel] = useState([]);
    const [priorities, setPriorities] = useState({});
    const [internationalSupport, setInternationalSupport] = useState([]);
    const [validationMessage, setValidationMessage] = useState('');
    const [showRecommendations, setShowRecommendations] = useState(false);

    const nextStep = () => {
        // Validation for Step 1 - require at least one topic
        if (step === 1) {
            if (selectedTopics.length === 0) {
                setValidationMessage('Please select at least one topic to continue.');
                return;
            }
        }
        
        // Clear validation message and proceed
        setValidationMessage('');
        setStep((prev) => prev + 1);
    };
    
    const prevStep = () => {
        setValidationMessage('');
        setStep((prev) => prev - 1);
    };

    // Mapping from high school subjects to specific areas of interest
    const subjectToAreasMapping = {
        'English': [
            'Literature', 'Languages & Linguistics', 'Cultural Studies'
        ],
        'Mathematics': [
            'Pure Mathematics', 'Data Science', 'Computer Science', 'Business Analytics'
        ],
        'Science': [
            'Biology', 'Chemistry', 'Physics', 'Ecology', 'Geology', 'Marine Science', 'Astronomy'
        ],
        'Economics': [
            'Economics', 'Accounting', 'Finance', 'Business Analytics'
        ],
        'HSIE': [
            'History', 'Geography', 'Sociology', 'Anthropology', 'Political Science',
            'International Relations', 'Human Geography', 'Criminology'
        ],
        'Creative Arts': [
            'Fine Arts (Painting, Sculpture, ect)', 'Graphic Design', 'Digital Media',
            'Photography', 'Acting & Theatre', 'Music', 'Fashion Design'
        ],
        'PDHPE': [
            'Exercise Physiology', 'Sport & Exercise Science', 'Fitness & Personal Training',
            'Public Health', 'Nutrition & Dietetics'
        ],
        'Information Technology': [
            'Computer Science', 'Software Engineering', 'Information Systems', 'Cybersecurity',
            'Artificial Intelligence', 'Cloud Computing', 'Game Design', 'Software Development'
        ],
        'Languages': [
            'Languages & Linguistics', 'Cultural Studies'
        ],
        'VET': [
            'Culinary Arts', 'Hospitality Management'
        ],
        'Business': [
            'Accounting', 'Business Analytics', 'Economics', 'Entrepreneurship',
            'Finance', 'Human Resource Management', 'Marketing', 'Supply Chain & Logistics'
        ],
        'Legal Studies': [
            'Criminal Law', 'Corporate/Commercial Law', 'Constitutional Law',
            'Environment Law', 'Human Rights Law', 'International Law', 'Criminology'
        ],
        'Design and Technology': [
            'Architecture', 'Mechanical Engineering', 'Civil Engineering', 
            'Electrical & Electronic Engineering', 'Software Engineering'
        ],
        'Music': [
            'Music', 'Sound Engineering', 'Acting & Theatre'
        ]
    };

    // Get relevant areas based on selected subjects
    const getRelevantAreas = () => {
        if (selectedTopics.length === 0) {
            // If no subjects selected, show all areas from selected disciplines
            const allAreas = [];
            selectedDisciplines.forEach(discipline => {
                allAreas.push(...(disciplineOptions[discipline] || []));
            });
            return allAreas;
        }
        
        const relevantAreas = new Set();
        selectedTopics.forEach(subject => {
            const areas = subjectToAreasMapping[subject] || [];
            areas.forEach(area => relevantAreas.add(area));
        });
        
        return Array.from(relevantAreas);
    };

    // Discipline options with their specific areas
    const disciplineOptions = {
        "Arts & Humanities": [
            "Archaeology", "History", "Philosophy", "Languages & Linguistics",
            "Literature", "Cultural Studies", "Religious Studies"
        ],
        "Creative Arts & Design": [
            "Fine Arts (Painting, Sculpture, ect)", "Graphic Design", "Digital Media",
            "Film & Screen Studies", "Photography", "Acting & Theatre", "Music",
            "Fashion Design", "Architecture"
        ],
        "Social Sciences": [
            "Anthropology", "Criminology", "Human Geography", "International Relations",
            "Political Science", "Psychology", "Sociology"
        ],
        "Business": [
            "Accounting", "Business Analytics", "Economics", "Entrepreneurship",
            "Finance", "Human Resource Management", "Marketing", "Supply Chain & Logistics"
        ],
        "Education": [
            "Early Childhood Education", "Primary Teaching", "Secondary Teaching",
            "Educational Psychology", "Special Education"
        ],
        "Engineering & Technology": [
            "Aerospace Engineering", "Chemical Engineering", "Civil Engineering",
            "Electrical & Electronic Engineering", "Mechanical Engineering", "Software Engineering",
            "Sound Engineering", "Mechatronics", "Robotics", "Computer Science", "Artificial Intelligence",
            "Cloud Computing", "Cybersecurity", "Data Science", "Information Systems",
            "Game Design", "Software Development"
        ],
        "Law": [
            "Criminal Law", "Corporate/Commercial Law", "Constitutional Law",
            "Environment Law", "Human Rights Law", "International Law"
        ],
        "Health Sciences & Medicine": [
            "Medicine", "Nursing", "Paramedics", "Midwifery", "Dentistry", "Orthodontics",
            "Physiotherapy", "Public Health", "Nutrition & Dietetics",
            "Occupational Therapy", "Veterinary"
        ],
        "Architecture": [
            "Construction Management", "Urban Planning", "Architecture",
            "Landscape Architecture", "Property & Real Estate"
        ],
        "Communication & Media": [
            "Journalism", "Media & Communications", "Public Relations", "Advertising",
            "Film & Television Production", "Digital Media Strategy"
        ],
        "Food & Hospitality": ["Culinary Arts", "Hospitality Management"],
        "Sports & Recreation": [
            "Exercise Physiology", "Sport & Exercise Science",
            "Fitness & Personal Training", "Leisure & Recreation Studies"
        ],
        "Science": [
            "Biology", "Ecology", "Physics", "Chemistry", "Astronomy", "Material Spaces",
            "Geology", "Geography", "Marine Science", "Pure Mathematics"
        ],
    };

    // Handler functions
    const handleTopicChange = (topic) => {
        setSelectedTopics(prev =>
            prev.includes(topic)
                ? prev.filter(t => t !== topic)
                : [...prev, topic]
        );
    };

    const handleDisciplineChange = (discipline) => {
        setSelectedDisciplines(prev =>
            prev.includes(discipline)
                ? prev.filter(d => d !== discipline)
                : [...prev, discipline]
        );
    };

    const handleAreaChange = (area) => {
        setSelectedAreas(prev =>
            prev.includes(area)
                ? prev.filter(a => a !== area)
                : [...prev, area]
        );
    };

    const handleStudyLevelChange = (level) => {
        setStudyLevel(prev =>
            prev.includes(level)
                ? prev.filter(l => l !== level)
                : [...prev, level]
        );
    };

    const handlePriorityChange = (priority, value) => {
        setPriorities(prev => ({
            ...prev,
            [priority]: value
        }));
    };

    const handleInternationalSupportChange = (support) => {
        setInternationalSupport(prev =>
            prev.includes(support)
                ? prev.filter(s => s !== support)
                : [...prev, support]
        );
    };

    const getAreaToProgramsMapping = () => {
        return {
            // Arts & Humanities
            "Archaeology": {
                UTS: { name: "Bachelor of Arts", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts" }
            },
            "History": {
                UTS: { name: "Bachelor of Arts", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts" }
            },
            "Philosophy": {
                UTS: { name: "Bachelor of Arts", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts" }
            },
            "Languages & Linguistics": {
                UTS: { name: "Bachelor of Arts", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts" }
            },
            "Literature": {
                UTS: { name: "Bachelor of Arts", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts" }
            },
            "Cultural Studies": {
                UTS: { name: "Bachelor of Arts", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts" }
            },
            "Religious Studies": {
                UTS: { name: "Bachelor of Arts", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts" }
            },

            // Creative Arts & Design
            "Fine Arts (Painting, Sculpture, ect)": {
                UTS: { name: "Bachelor of Visual Arts", url: "https://www.uts.edu.au/study/find-a-course/bachelor-visual-arts" }
            },
            "Graphic Design": {
                UTS: { name: "Bachelor of Design", url: "https://www.uts.edu.au/study/find-a-course/bachelor-design" }
            },
            "Digital Media": {
                UTS: { name: "Bachelor of Design", url: "https://www.uts.edu.au/study/find-a-course/bachelor-design" }
            },
            "Film & Screen Studies": {
                UTS: { name: "Bachelor of Communication", url: "https://www.uts.edu.au/study/find-a-course/bachelor-communication" }
            },
            "Photography": {
                UTS: { name: "Bachelor of Design", url: "https://www.uts.edu.au/study/find-a-course/bachelor-design" }
            },
            "Acting & Theatre": {
                UTS: { name: "Bachelor of Acting", url: "https://www.uts.edu.au/study/find-a-course/bachelor-acting" }
            },
            "Music": {
                UTS: { name: "Bachelor of Sound and Music Design", url: "https://www.uts.edu.au/study/find-a-course/bachelor-sound-and-music-design" }
            },
            "Fashion Design": {
                UTS: { name: "Bachelor of Design", url: "https://www.uts.edu.au/study/find-a-course/bachelor-design" }
            },
            "Architecture": {
                UTS: { name: "Bachelor of Design in Architecture", url: "https://www.uts.edu.au/study/find-a-course/bachelor-design-architecture" }
            },

            // Social Sciences
            "Anthropology": {
                UTS: { name: "Bachelor of Social Science", url: "https://www.uts.edu.au/study/find-a-course/bachelor-social-science" }
            },
            "Criminology": {
                UTS: { name: "Bachelor of Criminology", url: "https://www.uts.edu.au/study/find-a-course/bachelor-criminology" }
            },
            "Human Geography": {
                UTS: { name: "Bachelor of Social Science", url: "https://www.uts.edu.au/study/find-a-course/bachelor-social-science" }
            },
            "International Relations": {
                UTS: { name: "Bachelor of Arts (International, Social and Political Studies)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts-international-social-and-political-studies" }
            },
            "Political Science": {
                UTS: { name: "Bachelor of Arts (International, Social and Political Studies)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts-international-social-and-political-studies" }
            },
            "Psychology": {
                UTS: { name: "Bachelor of Psychology (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-psychology-honours" }
            },
            "Sociology": {
                UTS: { name: "Bachelor of Arts (International, Social and Political Studies)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts-international-social-and-political-studies" }
            },

            // Business
            "Accounting": {
                UTS: { name: "Bachelor of Accounting", url: "https://www.uts.edu.au/study/find-a-course/bachelor-accounting" }
            },
            "Business Analytics": {
                UTS: { name: "Bachelor of Business", url: "https://www.uts.edu.au/study/find-a-course/bachelor-business" }
            },
            "Economics": {
                UTS: { name: "Bachelor of Economics", url: "https://www.uts.edu.au/study/find-a-course/bachelor-economics" }
            },
            "Entrepreneurship": {
                UTS: { name: "Bachelor of Business", url: "https://www.uts.edu.au/study/find-a-course/bachelor-business" }
            },
            "Finance": {
                UTS: { name: "Bachelor of Business", url: "https://www.uts.edu.au/study/find-a-course/bachelor-business" }
            },
            "Human Resource Management": {
                UTS: { name: "Bachelor of Management", url: "https://www.uts.edu.au/study/find-a-course/bachelor-management" }
            },
            "Marketing": {
                UTS: { name: "Bachelor of Business", url: "https://www.uts.edu.au/study/find-a-course/bachelor-business" }
            },
            "Supply Chain & Logistics": {
                UTS: { name: "Bachelor of Business", url: "https://www.uts.edu.au/study/find-a-course/bachelor-business" }
            },

            // Engineering & Technology
            "Aerospace Engineering": {
                UTS: { name: "Bachelor of Engineering (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours" }
            },
            "Chemical Engineering": {
                UTS: { name: "Bachelor of Engineering (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours" }
            },
            "Civil Engineering": {
                UTS: { name: "Bachelor of Engineering (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours" }
            },
            "Electrical & Electronic Engineering": {
                UTS: { name: "Bachelor of Engineering (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours" }
            },
            "Mechanical Engineering": {
                UTS: { name: "Bachelor of Engineering (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours" }
            },
            "Software Engineering": {
                UTS: { name: "Bachelor of Engineering (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours" }
            },
            "Sound Engineering": {
                UTS: { name: "Bachelor of Sound and Music Design", url: "https://www.uts.edu.au/study/find-a-course/bachelor-sound-and-music-design" }
            },
            "Mechatronics": {
                UTS: { name: "Bachelor of Engineering (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours" }
            },
            "Robotics": {
                UTS: { name: "Bachelor of Engineering (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours" }
            },
            "Computer Science": {
                UTS: { name: "Bachelor of Computing Science (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-computing-science-honours" }
            },
            "Artificial Intelligence": {
                UTS: { name: "Bachelor of Computing Science (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-computing-science-honours" }
            },
            "Cloud Computing": {
                UTS: { name: "Bachelor of Science in Information Technology", url: "https://www.uts.edu.au/study/find-a-course/bachelor-science-information-technology" }
            },
            "Cybersecurity": {
                UTS: { name: "Bachelor of Cybersecurity", url: "https://www.uts.edu.au/study/find-a-course/bachelor-cybersecurity" }
            },
            "Data Science": {
                UTS: { name: "Bachelor of Computing Science (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-computing-science-honours" }
            },
            "Information Systems": {
                UTS: { name: "Bachelor of Science in Information Technology", url: "https://www.uts.edu.au/study/find-a-course/bachelor-science-information-technology" }
            },
            "Game Design": {
                UTS: { name: "Bachelor of Games and Interactive Environments", url: "https://www.uts.edu.au/study/find-a-course/bachelor-games-and-interactive-environments" }
            },
            "Software Development": {
                UTS: { name: "Bachelor of Computing Science (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-computing-science-honours" }
            },

            // Education
            "Early Childhood Education": {
                UTS: { name: "Bachelor of Education (Early Childhood and Primary)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-education-early-childhood-and-primary" }
            },
            "Primary Teaching": {
                UTS: { name: "Bachelor of Education (Primary)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-education-primary" }
            },
            "Secondary Teaching": {
                UTS: { name: "Bachelor of Arts in Educational Studies", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts-educational-studies" }
            },
            "Educational Psychology": {
                UTS: { name: "Bachelor of Arts in Educational Studies", url: "https://www.uts.edu.au/study/find-a-course/bachelor-arts-educational-studies" }
            },
            "Special Education": {
                UTS: { name: "Bachelor of Education (Primary)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-education-primary" }
            },

            // Law
            "Criminal Law": {
                UTS: { name: "Bachelor of Laws", url: "https://www.uts.edu.au/study/find-a-course/bachelor-laws" }
            },
            "Corporate/Commercial Law": {
                UTS: { name: "Bachelor of Laws", url: "https://www.uts.edu.au/study/find-a-course/bachelor-laws" }
            },
            "Constitutional Law": {
                UTS: { name: "Bachelor of Laws", url: "https://www.uts.edu.au/study/find-a-course/bachelor-laws" }
            },
            "Environment Law": {
                UTS: { name: "Bachelor of Laws", url: "https://www.uts.edu.au/study/find-a-course/bachelor-laws" }
            },
            "Human Rights Law": {
                UTS: { name: "Bachelor of Laws", url: "https://www.uts.edu.au/study/find-a-course/bachelor-laws" }
            },
            "International Law": {
                UTS: { name: "Bachelor of Laws", url: "https://www.uts.edu.au/study/find-a-course/bachelor-laws" }
            },

            // Health Sciences & Medicine
            "Medicine": {
                UTS: { name: "Bachelor of Medical Science", url: "https://www.uts.edu.au/study/find-a-course/bachelor-medical-science" }
            },
            "Nursing": {
                UTS: { name: "Bachelor of Nursing", url: "https://www.uts.edu.au/study/find-a-course/bachelor-nursing" }
            },
            "Paramedics": {
                UTS: { name: "Bachelor of Paramedicine", url: "https://www.uts.edu.au/study/find-a-course/bachelor-paramedicine" }
            },
            "Midwifery": {
                UTS: { name: "Bachelor of Midwifery", url: "https://www.uts.edu.au/study/find-a-course/bachelor-midwifery" }
            },
            "Dentistry": {
                UTS: { name: "Bachelor of Oral Health", url: "https://www.uts.edu.au/study/find-a-course/bachelor-oral-health" }
            },
            "Orthodontics": {
                UTS: { name: "Bachelor of Oral Health", url: "https://www.uts.edu.au/study/find-a-course/bachelor-oral-health" }
            },
            "Physiotherapy": {
                UTS: { name: "Bachelor of Physiotherapy (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-physiotherapy-honours" }
            },
            "Public Health": {
                UTS: { name: "Bachelor of Public Health", url: "https://www.uts.edu.au/study/find-a-course/bachelor-public-health" }
            },
            "Nutrition & Dietetics": {
                UTS: { name: "Bachelor of Health Sciences", url: "https://www.uts.edu.au/study/find-a-course/bachelor-health-sciences" }
            },
            "Occupational Therapy": {
                UTS: { name: "Bachelor of Occupational Therapy (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-occupational-therapy-honours" }
            },
            "Veterinary": {
                UTS: { name: "Bachelor of Veterinary Science", url: "https://www.uts.edu.au/study/find-a-course/bachelor-veterinary-science" }
            },

            // Architecture
            "Construction Management": {
                UTS: { name: "Bachelor of Construction Project Management", url: "https://www.uts.edu.au/study/find-a-course/bachelor-construction-project-management" }
            },
            "Urban Planning": {
                UTS: { name: "Bachelor of Urban Planning", url: "https://www.uts.edu.au/study/find-a-course/bachelor-urban-planning" }
            },
            "Landscape Architecture": {
                UTS: { name: "Bachelor of Landscape Architecture (Honours)", url: "https://www.uts.edu.au/study/find-a-course/bachelor-landscape-architecture-honours" }
            },
            "Property & Real Estate": {
                UTS: { name: "Bachelor of Property Economics", url: "https://www.uts.edu.au/study/find-a-course/bachelor-property-economics" }
            },

            // Communication & Media
            "Journalism": {
                UTS: { name: "Bachelor of Communication", url: "https://www.uts.edu.au/study/find-a-course/bachelor-communication" }
            },
            "Media & Communications": {
                UTS: { name: "Bachelor of Communication", url: "https://www.uts.edu.au/study/find-a-course/bachelor-communication" }
            },
            "Public Relations": {
                UTS: { name: "Bachelor of Communication", url: "https://www.uts.edu.au/study/find-a-course/bachelor-communication" }
            },
            "Advertising": {
                UTS: { name: "Bachelor of Communication", url: "https://www.uts.edu.au/study/find-a-course/bachelor-communication" }
            },
            "Film & Television Production": {
                UTS: { name: "Bachelor of Communication", url: "https://www.uts.edu.au/study/find-a-course/bachelor-communication" }
            },
            "Digital Media Strategy": {
                UTS: { name: "Bachelor of Communication", url: "https://www.uts.edu.au/study/find-a-course/bachelor-communication" }
            },

            // Food & Hospitality
            "Culinary Arts": {
                UTS: { name: "Bachelor of Management", url: "https://www.uts.edu.au/study/find-a-course/bachelor-management" }
            },
            "Hospitality Management": {
                UTS: { name: "Bachelor of Management", url: "https://www.uts.edu.au/study/find-a-course/bachelor-management" }
            },

            // Sports & Recreation
            "Exercise Physiology": {
                UTS: { name: "Bachelor of Sport and Exercise Science", url: "https://www.uts.edu.au/study/find-a-course/bachelor-sport-and-exercise-science" }
            },
            "Sport & Exercise Science": {
                UTS: { name: "Bachelor of Sport and Exercise Science", url: "https://www.uts.edu.au/study/find-a-course/bachelor-sport-and-exercise-science" }
            },
            "Fitness & Personal Training": {
                UTS: { name: "Bachelor of Sport and Exercise Management", url: "https://www.uts.edu.au/study/find-a-course/bachelor-sport-and-exercise-management" }
            },
            "Leisure & Recreation Studies": {
                UTS: { name: "Bachelor of Sport and Exercise Management", url: "https://www.uts.edu.au/study/find-a-course/bachelor-sport-and-exercise-management" }
            },

            // Science
            "Biology": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Ecology": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Physics": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Chemistry": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Astronomy": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Material Spaces": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Geology": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Geography": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Marine Science": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            },
            "Pure Mathematics": {
                UTS: { name: "Bachelor of Science (Flexible)", url: "https://www.uts.edu.au/courses/bachelor-of-science-flexible" }
            }
        };
    };

    const getRecommendedSubjects = () => {
        const areaMapping = getAreaToProgramsMapping();
        const programs = [];
        
        // Get programs based on selected areas
        selectedAreas.forEach(area => {
            if (areaMapping[area]) {
                const utsProgram = areaMapping[area].UTS;
                if (utsProgram) {
                    programs.push({
                        university: 'UTS',
                        name: utsProgram.name,
                        url: utsProgram.url,
                        area: area
                    });
                }
            }
        });

        // Remove duplicates based on program name
        const uniquePrograms = programs.filter((program, index, self) => 
            index === self.findIndex(p => p.name === program.name)
        );

        return uniquePrograms;
    };

    const QuestionSection = ({ title, description, options, multiple = true, value, onChange, showValidation = false }) => (
        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
            <div className="text-2xl font-semibold text-blue-800 mb-4">{title}</div>
            {description && <p className="text-gray-600 mb-4">{description}</p>}

            <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                    <label key={opt} className="flex items-center cursor-pointer">
                        <input
                            type={multiple ? 'checkbox' : 'radio'}
                            name={title}
                            value={opt}
                            checked={multiple ? value?.includes(opt) : value === opt}
                            onChange={(e) => {
                                if (multiple) {
                                    onChange(opt);
                                } else {
                                    onChange(e.target.value);
                                }
                            }}
                            className="peer hidden"
                        />
                        <span className={`px-3 py-1 rounded border text-gray-700 transition-colors ${
                            (multiple ? value?.includes(opt) : value === opt)
                                ? 'bg-blue-500 text-white border-blue-600'
                                : 'hover:bg-blue-50'
                        }`}>
                            {opt}
                        </span>
                    </label>
                ))}
            </div>

            {/* Validation message */}
            {showValidation && validationMessage && (
                <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                    <p className="text-red-700 text-sm font-medium">{validationMessage}</p>
                </div>
            )}

            <div className="flex justify-between mt-6">
                {step > 1 && (
                    <button
                        onClick={prevStep}
                        className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
                    >
                        Back
                    </button>
                )}
                <button
                    onClick={nextStep}
                    className="py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 ml-auto"
                >
                    Continue
                </button>
            </div>
        </section>
    );

    return (
        <Background>
            <div className="w-full max-w-6xl px-6 pb-6 pt-28 mx-auto flex-1">
                <main className="flex-1 space-y-10">
                    <div className="w-full max-w-6xl bg-white/50 backdrop-blur-md rounded-2xl shadow-xln px-10 py-8 text-center">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-3">
                            Course Questionnaire
                        </h1>
                        <p className="text-lg md:text-xl text-grey-700 max-w-2xl mx-auto">
                            Answer a few questions and get tailored UTS course recommendations.
                        </p>
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-4">
                                Pick all topics you are interested in
                            </div>
                            <p className="text-gray-600 mb-4">
                                If you're unsure, pick which high school subjects you enjoyed the most.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                    'English', 'Mathematics', 'Science', 'Economics', 'HSIE', 'Creative Arts',
                                    'PDHPE', 'Information Technology', 'Languages', 'VET', 'Business',
                                    'Legal Studies', 'Design and Technology', 'Music',
                                ].map((topic) => (
                                    <label key={topic} className="flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedTopics.includes(topic)}
                                            onChange={() => handleTopicChange(topic)}
                                            className="hidden"
                                        />
                                        <span className={`w-full text-center px-4 py-3 rounded border text-base font-medium transition-colors ${
                                            selectedTopics.includes(topic)
                                                ? 'bg-green-500 text-white border-green-600'
                                                : 'hover:bg-green-50'
                                        }`}>
                                            {topic}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {/* Validation message */}
                            {validationMessage && (
                                <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                                    <p className="text-red-700 text-sm font-medium">{validationMessage}</p>
                                </div>
                            )}

                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={nextStep}
                                    className="py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 ml-auto"
                                >
                                    Continue
                                </button>
                            </div>
                        </section>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-4">
                                Pick all the disciplines you'd be interested in studying
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                    'Arts & Humanities', 'Creative Arts & Design', 'Social Sciences', 'Business',
                                    'Education', 'Engineering & Technology', 'Law', 'Health Sciences & Medicine',
                                    'Architecture', 'Communication & Media', 'Food & Hospitality',
                                    'Sports & Recreation', 'Science',
                                ].map((discipline) => (
                                    <label key={discipline} className="flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={selectedDisciplines.includes(discipline)}
                                            onChange={() => handleDisciplineChange(discipline)}
                                            className="hidden"
                                        />
                                        <span className={`w-full text-center px-4 py-3 rounded border text-base font-medium transition-colors ${
                                            selectedDisciplines.includes(discipline)
                                                ? 'bg-blue-500 text-white border-blue-600'
                                                : 'hover:bg-blue-50'
                                        }`}>
                                            {discipline}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {/* Validation message */}
                            {validationMessage && (
                                <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                                    <p className="text-red-700 text-sm font-medium">{validationMessage}</p>
                                </div>
                            )}

                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={prevStep}
                                    className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 ml-auto"
                                >
                                    Continue
                                </button>
                            </div>
                        </section>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (selectedTopics.length > 0 || selectedDisciplines.length > 0) && (
                        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-4">
                                Pick specific areas of interest
                            </div>
                            <p className="text-gray-600 mb-4">
                                {selectedTopics.length > 0 
                                    ? `Based on your selected subjects (${selectedTopics.join(', ')}), here are the most relevant areas:`
                                    : "Choose specific areas under your selected disciplines."
                                }
                            </p>

                            {/* Show areas based on selected subjects */}
                            {selectedTopics.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-green-700 mb-4">
                                        Areas from your selected subjects:
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {getRelevantAreas().map((area) => (
                                            <label key={area} className="flex items-center cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedAreas.includes(area)}
                                                    onChange={() => handleAreaChange(area)}
                                                    className="hidden"
                                                />
                                                <span className={`w-full text-center px-4 py-3 rounded border text-base font-medium transition-colors ${
                                                    selectedAreas.includes(area)
                                                        ? 'bg-green-500 text-white border-green-600'
                                                        : 'hover:bg-green-50'
                                                }`}>
                                                    {area}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Show areas from selected disciplines */}
                            {selectedDisciplines.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-blue-700 mb-4">
                                        Areas from selected disciplines:
                                    </h3>
                                    {selectedDisciplines.map((discipline) => (
                                        <div key={discipline} className="mb-6">
                                            <h4 className="text-lg font-medium text-gray-800 mb-3">
                                                {discipline}
                                            </h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                {disciplineOptions[discipline]?.map((area) => (
                                                    <label key={area} className="flex items-center cursor-pointer">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={selectedAreas.includes(area)}
                                                            onChange={() => handleAreaChange(area)}
                                                            className="hidden"
                                                        />
                                                        <span className={`w-full text-center px-4 py-3 rounded border text-base font-medium transition-colors ${
                                                            selectedAreas.includes(area)
                                                                ? 'bg-blue-500 text-white border-blue-600'
                                                                : 'hover:bg-blue-50'
                                                }`}>
                                                    {area}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                                </div>
                            )}

                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={prevStep}
                                    className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 ml-auto"
                                >
                                    Continue
                                </button>
                            </div>
                        </section>
                    )}

                    {/* Step 4 */}
                    {step === 4 && (
                        <QuestionSection
                            title="Level of Study"
                            multiple={true}
                            options={[
                                'Certificates & Diplomas', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD & Doctorate'
                            ]}
                            value={studyLevel}
                            onChange={handleStudyLevelChange}
                        />
                    )}

                    {/* Step 5 */}
                    {step === 5 && (
                        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                            <div className="text-2xl font-semibold text-blue-800 mb-4">Rank your priorities</div>
                            <p className="text-gray-600 mb-4">
                                List your priorities below from 1–7, where 1 is your top concern and 7 is your least concern.
                            </p>
                            {[
                                'Academic Support',
                                'Tuition Costs',
                                'Study Opportunities',
                                'Campus Culture',
                                'Student Satisfaction',
                                'Career Outcomes',
                                'Modern Facilities',
                            ].map((item) => {
                                // Get all currently selected priority numbers
                                const selectedNumbers = Object.values(priorities).filter(num => num !== '' && num !== priorities[item]);
                                
                                return (
                                <div key={item} className="flex items-center justify-between mb-2">
                                    <label className="text-gray-700">{item}</label>
                                    <select 
                                        className="border rounded px-2 py-1"
                                        value={priorities[item] || ''}
                                        onChange={(e) => handlePriorityChange(item, e.target.value)}
                                    >
                                        <option value="">Select priority</option>
                                        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                                                <option 
                                                    key={n} 
                                                    value={n}
                                                    disabled={selectedNumbers.includes(n.toString())}
                                                >
                                                    {n}
                                                </option>
                                        ))}
                                    </select>
                                </div>
                                );
                            })}

                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={prevStep}
                                    className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 ml-auto"
                                >
                                    Continue
                                </button>
                            </div>
                        </section>
                    )}

                    {/* Step 6 (International Students) */}
                    {step === 6 && (
                        <QuestionSection
                            title="If you are an international student, what kind of support would you like?"
                            description="Pick all that apply"
                            options={[
                                'English or academic writing support',
                                'Help finding accommodation',
                                'Visa and work guidance',
                                'Orientation or buddy programs',
                            ]}
                            value={internationalSupport}
                            onChange={handleInternationalSupportChange}
                        />
                    )}

                    {/* Final step - Results */}
                    {step === 7 && (
                        <section className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white text-center">
                            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                                🎉 All Done!
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Thanks for completing the questionnaire. Here's a summary of your responses:
                            </p>
                            
                            <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
                                <h3 className="font-semibold mb-2">Your Questionnaire Answers:</h3>
                                <p><strong>Topics:</strong> {selectedTopics.join(', ') || 'None selected'}</p>
                                <p><strong>Areas of Interest:</strong> {selectedAreas.join(', ') || 'None selected'}</p>
                                <p><strong>Disciplines:</strong> {selectedDisciplines.join(', ') || 'None selected'}</p>
                                <p><strong>Study Level:</strong> {studyLevel.length > 0 ? studyLevel.join(', ') : 'Not selected'}</p>
                                {internationalSupport.length > 0 && (
                                    <p><strong>International Support:</strong> {internationalSupport.join(', ')}</p>
                                )}
                            </div>

                            {/* UTS Programs Recommendations */}
                            {showRecommendations && (() => {
                                const recommendedPrograms = getRecommendedSubjects();
                                
                                return (
                                    <div className="text-left bg-green-50 p-6 rounded-lg mb-6">
                                        <h3 className="text-2xl font-semibold text-green-800 mb-4">📚 Recommended UTS Programs</h3>
                                        
                                        {recommendedPrograms.length > 0 ? (
                                            <div className="mb-6">
                                                <p className="text-gray-700 mb-4">
                                                    Based on your selected areas of interest, here are the recommended UTS programs:
                                                </p>
                                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                                                    <p className="text-blue-800 text-sm">
                                                        <strong>Note:</strong> Your questionnaire results can always be redone at any time
                                                    </p>
                                                </div>
                                                
                                                {/* UTS Programs */}
                                                <div className="bg-white p-4 rounded-lg border border-green-200">
                                                    <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                                        🏫 University of Technology Sydney (UTS)
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {recommendedPrograms.map((program, index) => (
                                                            <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                                                                <a 
                                                                    href={program.url} 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer"
                                                                    className="block"
                                                                >
                                                                    <p className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                                                                        {program.name}
                                                                    </p>
                                                                    <p className="text-sm text-gray-500 mt-1">
                                                                        Related to: {program.area}
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="mb-6">
                                                <p className="text-gray-700 mb-4">
                                                    No specific programs recommended. Please select areas of interest for personalized recommendations.
                                                </p>
                                            </div>
                                        )}

                                        {/* UTS Link */}
                                        <div className="border-t border-green-200 pt-4">
                                        <a
                                            href="https://www.uts.edu.au/courses"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-semibold text-green-800 hover:text-green-600 mb-3 block"
                                        >
                                            🔗 Click Here To Explore The UTS Official Website
                                        </a>
                                        </div>
                                    </div>
                                );
                            })()}

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => {
                                        // Reset all state and go back to step 1
                                        setStep(1);
                                        setSelectedTopics([]);
                                        setSelectedDisciplines([]);
                                        setSelectedAreas([]);
                                        setStudyLevel([]);
                                        setPriorities({});
                                        setInternationalSupport([]);
                                        setValidationMessage('');
                                        setShowRecommendations(false);
                                    }}
                                    className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
                                >
                                    Start Over
                                </button>
                                <button
                                    onClick={() => {
                                        if (!showRecommendations) {
                                            // Show recommendations
                                            setShowRecommendations(true);
                                            
                                            // Log data for backend
                                            console.log('Questionnaire completed:', {
                                                selectedTopics,
                                                selectedDisciplines,
                                                selectedAreas,
                                                studyLevel,
                                                priorities,
                                                internationalSupport,
                                                recommendedSubjects: getRecommendedSubjects()
                                            });
                                        } else {
                                            // Hide recommendations
                                            setShowRecommendations(false);
                                        }
                                    }}
                                    className="py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600"
                                >
                                    {showRecommendations ? 'Hide Recommendations' : 'Get UTS Recommendations'}
                                </button>
                                <button
                                onClick={() => navigate('/profile-setup')}
                                className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
                                >
                                Go to Profile 
                                </button>
                            </div>
                        </section>
                    )}
                </main>
            </div>
            <Footer />
        </Background>
    );
}
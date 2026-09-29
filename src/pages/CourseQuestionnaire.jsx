import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { PATHS } from '../config/routes';
import useToggleList from '../hooks/useToggleList';
import AreasStep from '../features/questionnaire/AreasStep';
import MultiSelectStep from '../features/questionnaire/MultiSelectStep';
import PrioritiesStep from '../features/questionnaire/PrioritiesStep';
import ResultsStep from '../features/questionnaire/ResultsStep';
import {
    DISCIPLINES,
    INTERNATIONAL_SUPPORT_OPTIONS,
    PRIORITIES,
    STUDY_LEVELS,
    SUBJECTS,
} from '../features/questionnaire/questionnaireData';
import { getRecommendedPrograms } from '../features/questionnaire/programMatching';
import usePageMeta from '../hooks/usePageMeta';

export default function CourseQuestionnaire() {
    usePageMeta('Course Questionnaire', PATHS.QUESTIONNAIRE);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // Questionnaire responses
    const [subjects, toggleSubject, setSubjects] = useToggleList();
    const [disciplines, toggleDiscipline, setDisciplines] = useToggleList();
    const [areas, toggleArea, setAreas] = useToggleList();
    const [studyLevels, toggleStudyLevel, setStudyLevels] = useToggleList();
    const [internationalSupport, toggleInternationalSupport, setInternationalSupport] = useToggleList();
    const [priorities, setPriorities] = useState({});

    const [validationMessage, setValidationMessage] = useState('');
    const [showRecommendations, setShowRecommendations] = useState(false);

    const nextStep = () => {
        // Step 1 requires at least one subject
        if (step === 1 && subjects.length === 0) {
            setValidationMessage('Please select at least one topic to continue.');
            return;
        }
        setValidationMessage('');
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setValidationMessage('');
        setStep((prev) => prev - 1);
    };

    const handlePriorityChange = (item, value) => setPriorities((prev) => ({ ...prev, [item]: value }));

    const startOver = () => {
        setStep(1);
        setSubjects([]);
        setDisciplines([]);
        setAreas([]);
        setStudyLevels([]);
        setPriorities({});
        setInternationalSupport([]);
        setValidationMessage('');
        setShowRecommendations(false);
    };

    const recommendedPrograms = getRecommendedPrograms(areas);

    const toggleRecommendations = () => {
        if (!showRecommendations) {
            // Log data for backend
            console.log('Questionnaire completed:', {
                subjects,
                disciplines,
                areas,
                studyLevels,
                priorities,
                internationalSupport,
                recommendedPrograms,
            });
        }
        setShowRecommendations(!showRecommendations);
    };

    const nav = { onBack: prevStep, onNext: nextStep };

    return (
        <PageLayout>
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

                    {step === 1 && (
                        <MultiSelectStep
                            title="Pick all topics you are interested in"
                            description="If you're unsure, pick which high school subjects you enjoyed the most."
                            options={SUBJECTS}
                            selected={subjects}
                            onToggle={toggleSubject}
                            color="green"
                            error={validationMessage}
                            onNext={nextStep}
                        />
                    )}

                    {step === 2 && (
                        <MultiSelectStep
                            title="Pick all the disciplines you'd be interested in studying"
                            options={DISCIPLINES}
                            selected={disciplines}
                            onToggle={toggleDiscipline}
                            {...nav}
                        />
                    )}

                    {step === 3 && (subjects.length > 0 || disciplines.length > 0) && (
                        <AreasStep
                            subjects={subjects}
                            disciplines={disciplines}
                            selectedAreas={areas}
                            onToggleArea={toggleArea}
                            {...nav}
                        />
                    )}

                    {step === 4 && (
                        <MultiSelectStep
                            title="Level of Study"
                            layout="chips"
                            options={STUDY_LEVELS}
                            selected={studyLevels}
                            onToggle={toggleStudyLevel}
                            {...nav}
                        />
                    )}

                    {step === 5 && (
                        <PrioritiesStep
                            items={PRIORITIES}
                            priorities={priorities}
                            onChange={handlePriorityChange}
                            {...nav}
                        />
                    )}

                    {step === 6 && (
                        <MultiSelectStep
                            title="If you are an international student, what kind of support would you like?"
                            description="Pick all that apply"
                            layout="chips"
                            options={INTERNATIONAL_SUPPORT_OPTIONS}
                            selected={internationalSupport}
                            onToggle={toggleInternationalSupport}
                            {...nav}
                        />
                    )}

                    {step === 7 && (
                        <ResultsStep
                            answers={{ subjects, areas, disciplines, studyLevels, internationalSupport }}
                            programs={recommendedPrograms}
                            showRecommendations={showRecommendations}
                            onToggleRecommendations={toggleRecommendations}
                            onStartOver={startOver}
                            onGoToProfile={() => navigate(PATHS.PROFILE)}
                        />
                    )}
                </main>
            </div>
        </PageLayout>
    );
}

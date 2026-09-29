import { QuestionCard, PRIMARY_BUTTON, SECONDARY_BUTTON } from './QuestionCard';
import Recommendations from './Recommendations';

// Final step: summary of answers, optional recommendations, and next actions
export default function ResultsStep({
    answers,
    programs,
    showRecommendations,
    onToggleRecommendations,
    onStartOver,
    onGoToProfile,
}) {
    const { subjects, areas, disciplines, studyLevels, internationalSupport } = answers;

    return (
        <QuestionCard className="text-center">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">🎉 All Done!</h2>
            <p className="text-gray-600 mb-6">
                Thanks for completing the questionnaire. Here's a summary of your responses:
            </p>

            <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Your Questionnaire Answers:</h3>
                <p><strong>Topics:</strong> {subjects.join(', ') || 'None selected'}</p>
                <p><strong>Areas of Interest:</strong> {areas.join(', ') || 'None selected'}</p>
                <p><strong>Disciplines:</strong> {disciplines.join(', ') || 'None selected'}</p>
                <p><strong>Study Level:</strong> {studyLevels.join(', ') || 'Not selected'}</p>
                {internationalSupport.length > 0 && (
                    <p><strong>International Support:</strong> {internationalSupport.join(', ')}</p>
                )}
            </div>

            {showRecommendations && <Recommendations programs={programs} />}

            <div className="flex justify-center gap-4">
                <button onClick={onStartOver} className={SECONDARY_BUTTON}>Start Over</button>
                <button onClick={onToggleRecommendations} className={PRIMARY_BUTTON}>
                    {showRecommendations ? 'Hide Recommendations' : 'Get UTS Recommendations'}
                </button>
                <button onClick={onGoToProfile} className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
                    Go to Profile
                </button>
            </div>
        </QuestionCard>
    );
}

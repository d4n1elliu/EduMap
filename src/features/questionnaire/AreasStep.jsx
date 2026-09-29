import OptionGrid from './OptionGrid';
import { QuestionCard, StepNav } from './QuestionCard';
import { DISCIPLINE_AREAS } from './questionnaireData';
import { getRelevantAreas } from './programMatching';

// Step 3: pick specific areas, grouped by subject and by discipline
export default function AreasStep({ subjects, disciplines, selectedAreas, onToggleArea, onBack, onNext }) {
    const description = subjects.length > 0
        ? `Based on your selected subjects (${subjects.join(', ')}), here are the most relevant areas:`
        : 'Choose specific areas under your selected disciplines.';

    return (
        <QuestionCard title="Pick specific areas of interest" description={description}>
            {subjects.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">
                        Areas from your selected subjects:
                    </h3>
                    <OptionGrid
                        options={getRelevantAreas(subjects, disciplines)}
                        selected={selectedAreas}
                        onToggle={onToggleArea}
                        color="green"
                    />
                </div>
            )}

            {disciplines.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">
                        Areas from selected disciplines:
                    </h3>
                    {disciplines.map((discipline) => (
                        <div key={discipline} className="mb-6">
                            <h4 className="text-lg font-medium text-gray-800 mb-3">{discipline}</h4>
                            <OptionGrid
                                options={DISCIPLINE_AREAS[discipline] || []}
                                selected={selectedAreas}
                                onToggle={onToggleArea}
                            />
                        </div>
                    ))}
                </div>
            )}

            <StepNav onBack={onBack} onNext={onNext} />
        </QuestionCard>
    );
}

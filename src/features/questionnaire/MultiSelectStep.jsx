import OptionGrid from './OptionGrid';
import { QuestionCard, StepNav, ValidationMessage } from './QuestionCard';

// A full questionnaire step: question, selectable options, error and navigation
export default function MultiSelectStep({
    title,
    description,
    options,
    selected,
    onToggle,
    color,
    layout,
    error,
    onBack,
    onNext,
}) {
    return (
        <QuestionCard title={title} description={description}>
            <OptionGrid options={options} selected={selected} onToggle={onToggle} color={color} layout={layout} />
            <ValidationMessage>{error}</ValidationMessage>
            <StepNav onBack={onBack} onNext={onNext} />
        </QuestionCard>
    );
}
